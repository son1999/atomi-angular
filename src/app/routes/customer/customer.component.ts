import { Component, OnInit } from '@angular/core';
import { get, trim } from 'lodash';
import { ApiService } from 'src/app/_core/services/http/api.service';
import { LoadingService } from 'src/app/_core/services/loading/loading.service';
import { ToastrService } from 'src/app/_core/services/toastr/toastr.service';
import { CONFIG } from 'src/app/_utils/constants';
import { CustomerDetailInterface } from './_interfaces';
import { getDisplayFirstLetterOfName } from 'src/app/_utils/functions';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomerService } from './_services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  customerInfo: CustomerDetailInterface | null = null;
  isLoading$: Observable<boolean>;
  valForm: FormGroup;
  constructor(
    private loading: LoadingService,
    private api: ApiService,
    private customerService: CustomerService,
    fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.isLoading$ = this.loading.isLoading$;
    this.valForm = fb.group({
      name: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(CONFIG.REGEX.namePattern)]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("[- +()0-9]+")]],
      email: [{value: '',  disabled: true}, []],
      company: ['', []],
      position: ['', []]
    });
  }

  ngOnInit(): void {
    this.load();
  } 


  load(){
    this.loading.next(true);
    this.api.get('/customer').then(rs => {
      this.loading.next(false);
      if(rs.statusCode != CONFIG.CODE.SUCCESS){
        const msg = get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }
      this.customerInfo = rs.data;
      this.valForm.controls['name'].setValue(this.customerInfo?.name.trim());
      this.valForm.controls['phone'].setValue(this.customerInfo?.phone);
      this.valForm.controls['email'].setValue(this.customerInfo?.email);
      this.valForm.controls['company'].setValue(this.customerInfo?.company);
      this.valForm.controls['position'].setValue(this.customerInfo?.position);
    });
  }
  hasError(name: string, valid: string) {
    return (
      this.valForm.controls[name].hasError(valid) &&
      (this.valForm.controls[name].dirty || this.valForm.controls[name].touched)
    );
  }

  showName(){
    return getDisplayFirstLetterOfName(this.customerInfo?.name || '');
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
    this.api.put('customer',values).then(rs => {
      this.loading.next(false);
      if(rs.statusCode !== CONFIG.CODE.SUCCESS){
        const msg =  get(rs, 'msg', 'BASE.ERROR');
        this.toastr.error(msg);
        return;
      }
      this.toastr.success('Cập nhật thành công!');
      if(this.customerInfo){
        this.customerInfo.name = values.name;
        this.customerService.updateChangeCustomerInfo(values.name.trim(), values.phone.trim());
        values.name = values.name.trim();
        values.phone = values.phone.trim();
      }
    })
  }

}
