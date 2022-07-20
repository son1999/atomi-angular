import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_core/services/http/api.service';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';
import { CONFIG } from 'src/app/_utils/constants';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent implements OnInit {
  valForm: FormGroup;
  isLoading$: Observable<boolean>;
  needConfirmCapcha: boolean = false;
  imgUrl: string = '';
  constructor(
    fb: FormBuilder,
    public loading: LoadingService,
    private router: Router,
    private toastr: ToastrService,
    private apiService: ApiService
  ) {
    this.isLoading$ = this.loading.isLoading$;
    this.valForm = fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      clientPublicKey: ['', Validators.required],
      callbackURL: ['', []],
    });
  }

  ngOnInit(): void {}

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
    const body = {
      ...values,
      appIcon: this.imgUrl.split(';base64,')[1] || ''
    }
    this.apiService.post('apps', body).then(rs => {
      this.loading.next(false);
      if(rs.statusCode !== CONFIG.CODE.SUCCESS){
        const msg =  get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }
      this.toastr.success('Tạo app thành công');
      this.router.navigateByUrl(`/apps/detail/${rs.data.insertId}`)
    });
  }
  preview($ev: any) {
    const file: any = $ev.target.files[0];
    if (!file) return;

    if (file.type.match(/image\/*/) == null) {
      this.toastr.warning('File không đúng định dạng');
      return;
    }
    if(file.size > 1000000){
      this.toastr.warning('File upload ko quá 1MB');
      return;
    }
    const self = this;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e: any) {
      self.imgUrl = e.target.result
    };
  
  }
}
