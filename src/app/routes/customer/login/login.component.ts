import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';
import { CustomerService } from '../_services/customer.service';
import { Observable } from 'rxjs';
import { CONFIG } from 'src/app/_utils/constants';
import { get } from 'lodash';
import { ToastrService } from 'src/app/_core/services/toastr/toastr.service';
import { ApiService } from 'src/app/_core/services/http/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  valForm: FormGroup;
  isLoading$: Observable<boolean>;
  needConfirmCapcha: boolean = false;
  showAlertVerified = false;
  hideIconEye: boolean = true;
  constructor(
    fb: FormBuilder,
    public loading: LoadingService,
    private router: Router,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private activatedRouter: ActivatedRoute
  ) {
    this.isLoading$ = this.loading.isLoading$;
    this.valForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      capcha: ['', []],
      recaptcha: ['', Validators.required]
    });
  }
  public readonly siteKey = CONFIG.SITEKEY;
  ngOnInit(): void {
    const token = this.activatedRouter.snapshot.params['token'];
    if(token){
      this.loading.next(true);
      this.customerService.verify(token).then(rs => {
        this.loading.next(false);
        if(rs.statusCode != CONFIG.CODE.SUCCESS){
          const msg =  get(rs, 'msg', 'BASE.ERROR');
          this.toastr.error(msg);
          return;
        }
        this.showAlertVerified = true;
      })
    }
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
    this.customerService.login(values).then((rs) => {
      this.loading.next(false);
      if(rs.statusCode !== CONFIG.CODE.SUCCESS){
        // const msg =  get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error('Thông tin đăng nhập của Quý khách không đúng');
        return;
      }
      this.toastr.success('Đăng nhập thành công');
      this.router.navigateByUrl('/')
    });
  }
}
