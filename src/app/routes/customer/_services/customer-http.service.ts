import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/_core/services/http/api.service';
import { HttpService } from 'src/app/_core/services/http/http.service';
import { CustomerLoginRequestInterface } from '../_interfaces';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {
  constructor(
    private httpService: HttpService,
    ) {}
  login(data: CustomerLoginRequestInterface) {
    return this.httpService.post('customer/login',data);
  } 
  register(customer: any){
    return this.httpService.post('customer',customer);
  }
  forgotPassword(data: { email : string}){
    return this.httpService.post('customer/forgot-password', data);
  }
  changePasswordByOTP(data: { email: string, password: string, confirmPassword: string, otp: string }){
    return this.httpService.post('customer/change-password-by-otp', data);
  }
  verify(token: string){
    return this.httpService.post('customer/verify', {token});
  }
}
