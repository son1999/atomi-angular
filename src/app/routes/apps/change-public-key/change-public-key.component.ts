import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { get } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_core/services/http/api.service';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';
import { CONFIG } from 'src/app/_utils/constants';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UpdateSuccessComponent } from '../_popups/update-success/update-success.component';

@Component({
  selector: 'app-change-public-key',
  templateUrl: './change-public-key.component.html',
  styleUrls: ['./change-public-key.component.scss'],
})
export class ChangePublicKeyComponent implements OnInit {
  valForm: FormGroup;
  isLoading$: Observable<boolean>;
  needConfirmCapcha: boolean = false;
  app: any = null;
  constructor(
    fb: FormBuilder,
    public loading: LoadingService,
    private router: Router,
    private toastr: ToastrService,
    private apiService: ApiService,
    private activateRoute: ActivatedRoute,
    private bmService: BsModalService
  ) {
    this.isLoading$ = this.loading.isLoading$;
    this.valForm = fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      clientPublicKey: ['', Validators.required],
      // callbackURL: ['', []],
    });
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    const id = this.activateRoute.snapshot.params['id'];
    this.loading.next(true);
    this.apiService.get(`apps/${id}`).then((rs) => {
      this.loading.next(false);
      if (rs.statusCode != CONFIG.CODE.SUCCESS) {
        const msg = get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        this.router.navigate(['/apps']);
        return;
      }
      this.app = rs.data;
      this.valForm.patchValue({
        id: rs.data?.id,
        name: rs.data?.name,
        description: rs.data?.description,
        clientPublicKey: rs.data?.clientPublicKey,
      });
    });
  }
  hasError(name: string, valid: string) {
    return (
      this.valForm.controls[name].hasError(valid) &&
      (this.valForm.controls[name].dirty || this.valForm.controls[name].touched)
    );
  }

  async submit($ev: any, values: any) {
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (!this.valForm.valid) {
      return;
    }
    this.loading.next(true);
    this.apiService.put('apps', values).then((rs) => {
      this.loading.next(false);
      if (rs.statusCode !== CONFIG.CODE.SUCCESS) {
        const msg = get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }

        this.bmService
          .show(UpdateSuccessComponent, {
            class: 'modal-xs h-75 d-flex align-items-center justify-content-center',
            // initialState: {
            //   type: type,
            // },
          })
        
      
      //this.toastr.success('Cập nhật thành công');
      // this.toastr.success('Nội dung thông báo', 'title')
      this.router.navigateByUrl(`/apps/detail/${values.id}`);
    });
  }
}
