import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'lodash';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';
import { ToastrService } from 'src/app/_core/services/toastr/toastr.service';
import { CONFIG } from 'src/app/_utils/constants';
import { CustomerHttpService } from '../_services/customer-http.service';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  valForm: FormGroup;
  confirmForm: FormGroup;
  isLoading$: Observable<boolean>;
  needConfirmCapcha: boolean = false;
  resetOTP: boolean = false;
  step: 'OTP' | 'CONFIRM' = 'OTP';
  constructor(
    fb: FormBuilder,
    public loading: LoadingService,
    private router: Router,
    private customerHttpService: CustomerHttpService,
    private toastr: ToastrService
  ) {
    this.isLoading$ = this.loading.isLoading$;
    this.valForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.confirmForm = fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        otp: ['', [Validators.required]],
      },
      {
        Validators: this.comparePw,
      }
    );
  }
  comparePw(c: AbstractControl) {
    const { value } = c;
    return value.password === value.confirmPassWord
      ? null
      : {
          comparePw: true,
        };
  }
  ngOnInit(): void {}
  hasError(name: string, valid: string) {
    return (
      this.valForm.controls[name].hasError(valid) &&
      (this.valForm.controls[name].dirty || this.valForm.controls[name].touched)
    );
  }
  hasChangeError(name: string, valid: string) {
    return (
      this.confirmForm.controls[name].hasError(valid) &&
      (this.confirmForm.controls[name].dirty ||
        this.confirmForm.controls[name].touched)
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
    this.customerHttpService.forgotPassword(values).then((rs) => {
      this.loading.next(false);
      if (rs.statusCode !== CONFIG.CODE.SUCCESS) {
        const msg = get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }
      this.toastr.success('Mã xác thục đã được gửi tới email của bạn');
      this.step = 'CONFIRM';
    });
  }

  async resetOtp() {
    const data = {
      email: this.valForm.get('email')?.value,
    };
    this.loading.next(true);
    this.customerHttpService.forgotPassword(data).then((rs) => {
      this.loading.next(false);
      if (rs.statusCode !== CONFIG.CODE.SUCCESS) {
        const msg = get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }
      this.toastr.success('Mã xác thục đã được gửi tới email của bạn');
      this.step = 'CONFIRM';
      this.resetOTP = false;
    });
  }

  get isErrorConfirmPw() {
    return (
      this.confirmForm.get('confirmPassword')?.touched &&
      this.confirmForm.get('password')?.value !=
        this.confirmForm.get('confirmPassword')?.value
    );
  }
  async submitChange($ev: any, values: any) {
    $ev.preventDefault();
    for (let c in this.confirmForm.controls) {
      this.confirmForm.controls[c].markAsTouched();
    }
    if (!this.confirmForm.valid) {
      return;
    }
    this.loading.next(true);
    const data = { ...values, email: this.valForm.get('email')?.value };
    this.customerHttpService.changePasswordByOTP(data).then((rs) => {
      this.loading.next(false);
      if (rs.statusCode !== CONFIG.CODE.SUCCESS) {
        const msg = get(rs, 'msg', 'BASE.ERROR');
        const code = get(rs, 'code', '');
        if (code === 'RESET_OTP') {
          this.valForm.controls['otp'].setValue('');
          this.resetOTP = true;
          this.toastr.error(
            'Mã OTP của bạn đã nhập sai 3 lần. Vui lòng gửi lại OTP và nhận OTP từ email của bạn'
          );
          return;
        }
        this.valForm.controls['otp'].setValue('');
        this.toastr.error(msg);
        return;
      }
      this.toastr.success('Đổi mật khẩu thành công!');
      this.router.navigateByUrl('/login');
    });
  }
}
