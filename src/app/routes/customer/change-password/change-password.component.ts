import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_core/services/http/api.service';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';
import { CONFIG } from 'src/app/_utils/constants';
import { getDisplayFirstLetterOfName } from 'src/app/_utils/functions';
import { CustomerDetailInterface } from '../_interfaces';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  customerInfo: CustomerDetailInterface | null = null;
  isLoading$: Observable<boolean>;
  valForm: FormGroup;
  constructor(
    private loading: LoadingService,
    private api: ApiService,
    private router: Router,
    fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.isLoading$ = this.loading.isLoading$;
    this.valForm = fb.group(
      {
        oldPassword: ['', [Validators.required]],
        recaptcha: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
      },
      {
        Validators: this.comparePw,
      }
    );
  }

  public readonly siteKey = CONFIG.SITEKEY;

  comparePw(c: AbstractControl) {
    const { value } = c;
    return value.password === value.confirmPassWord
      ? null
      : {
          comparePw: true,
        };
  }
  get isErrorConfirmPw() {
    return (
      this.valForm.get('confirmPassword')?.touched &&
      this.valForm.get('password')?.value !=
        this.valForm.get('confirmPassword')?.value
    );
  }

  ngOnInit(): void {}

  hasError(name: string, valid: string) {
    return (
      this.valForm.controls[name].hasError(valid) &&
      (this.valForm.controls[name].dirty || this.valForm.controls[name].touched)
    );
  }
  showName() {
    return getDisplayFirstLetterOfName(this.customerInfo?.name || '');
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
    this.api.post('customer/change-password', values).then((rs) => {
      this.loading.next(false);
      if (rs.statusCode !== CONFIG.CODE.SUCCESS) {
        const msg = get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }
      this.toastr.success('Thay đổi mật khẩu thành công!');
      this.router.navigate(['customer']);
    });
  }
}
