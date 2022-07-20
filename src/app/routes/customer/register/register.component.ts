import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';
import { ToastrService } from 'src/app/_core/services/toastr/toastr.service';
import { CONFIG } from 'src/app/_utils/constants';
import { CustomerService } from '../_services/customer.service';
import { get } from 'lodash';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  valForm: FormGroup;
  isLoading$: Observable<boolean>;
  needConfirmCapcha: boolean = false;
  registerSucceed = false;
  constructor(
    fb: FormBuilder,
    public loading: LoadingService,
    private router: Router,
    private toastr: ToastrService,
    private customerService: CustomerService
  ) {
    this.isLoading$ = this.loading.isLoading$;
    this.valForm = fb.group(
      {
        name: [
          '',
          [Validators.required, Validators.pattern(CONFIG.REGEX.namePattern), Validators.maxLength(100)],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('[a-zA-Z0-9@.]*'),
          ],
        ],
        // email: ['', [ Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
        phone: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern('[- +()0-9]+'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
            ),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
            ),
          ],
        ],
        recaptcha: ['', Validators.required],
      },
      {
        Validators: this.comparePw,
      }
    );
  }

  public readonly siteKey = CONFIG.SITEKEY;
  ngOnInit(): void {}

  hasErrorEmail() {}
  comparePw(c: AbstractControl) {
    const { value } = c;
    return value.password === value.confirmPassWord
      ? null
      : {
          comparePw: true,
        };
  }
  renderTextErr(validKey: string) {
    switch (validKey) {
      case 'required':
        return 'Vui lòng nhập email';
      case 'email':
        return 'Email không đúng định dạng';
      case 'pattern':
        return 'Email không được chứa ký tự đặc biệt';
      default:
        return '';
    }
  }
  hasErrorAdv(name: string, valids: string[]) {
    const listErr = valids
      .map((valid: string) => {
        return {
          error:
            this.valForm.controls[name].hasError(valid) &&
            (this.valForm.controls[name].dirty ||
              this.valForm.controls[name].touched),
          text: this.renderTextErr(valid),
          valid: valid,
        };
      })
      .filter((item: any) => item.error);

    return listErr.length > 0 ? listErr[0] : { error: false, text: '' };
  }
  renderTextPw(validKey: string) {
    switch (validKey) {
      case 'required':
        return 'Vui lòng nhập mật khẩu';
      case 'pattern':
        return 'Mật khẩu phải có 8 ký tự trở lên chứa ít nhất một kí tự viết thường, một kí tự viết hoa,một kí tự đặc biệt, và một ký tự số';
      default:
        return '';
    }
  }
  hasErrorPw(name: string, valids: string[]) {
    const listErr = valids
      .map((valid: string) => {
        return {
          error:
            this.valForm.controls[name].hasError(valid) &&
            (this.valForm.controls[name].dirty ||
              this.valForm.controls[name].touched),
          text: this.renderTextPw(valid),
          valid: valid,
        };
      })
      .filter((item: any) => item.error);

    return listErr.length > 0 ? listErr[0] : { error: false, text: '' };
  }

  hasError(name: string, valid: string) {
    return (
      this.valForm.controls[name].hasError(valid) &&
      (this.valForm.controls[name].dirty || this.valForm.controls[name].touched)
    );
  }
  get isErrorConfirmPw() {
    return (
      this.valForm.get('confirmPassword')?.touched &&
      this.valForm.get('password')?.value !=
        this.valForm.get('confirmPassword')?.value
    );
  }

  // hanlde not typing char
  inputValidator(event: any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
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
    this.customerService.register(values).then((rs) => {
      this.loading.next(false);
      if (rs.statusCode !== CONFIG.CODE.SUCCESS) {
        const msg = get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }
      this.toastr.success('Đăng ký thành công');
      this.registerSucceed = true;
      // this.router.navigateByUrl('/')
    });
  }
}
