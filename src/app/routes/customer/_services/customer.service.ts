import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CONFIG } from 'src/app/_utils/constants';
import { Storage } from 'src/app/_utils/storage';
import { CustomerInterface } from '../_interfaces';
import { Router } from '@angular/router';
import { CustomerHttpService } from './customer-http.service';
import { ApiResponseDataInterface } from 'src/app/_core/interfaces/api-response-data.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customer = new BehaviorSubject<CustomerInterface | null>(
    this.customerInfo
  );
  customer$ = this.customer.asObservable();

  public set customerInfo(value: CustomerInterface | null) {
    Storage.set(CONFIG.KEY.CUSTOMER_INFO, value);
    this.customer.next(value);
  }
  public get customerInfo(): CustomerInterface | null {
    return Storage.get(CONFIG.KEY.CUSTOMER_INFO, null);
  }

  constructor(
    private router: Router,
    private customerHttp: CustomerHttpService
  ) {}
  updateChangeCustomerInfo(name:string, phone: string){
    if(this.customerInfo){
      const newInfo = JSON.parse(JSON.stringify(this.customerInfo))
      newInfo.name = name;
      newInfo.phone = phone;
      this.customerInfo = newInfo;
    }
  }
  isAuthenticated() {
    return this.customerInfo != null;
  }
  login(data: {email: string, password: string}): Promise<ApiResponseDataInterface> {
    return new Promise((resolve) => {
      this.customerHttp.login(data).then((rs) => {
        if (rs.statusCode === CONFIG.CODE.SUCCESS) {
          this.customerInfo = rs.data;
        }
        resolve(rs);
      });
    });
  }
  register(customer: any): Promise<ApiResponseDataInterface> {
    return new Promise((resolve) => {
      this.customerHttp.register(customer).then((rs) => {
        if (rs.statusCode === CONFIG.CODE.SUCCESS) {
          // this.customerInfo = rs.data;
        }
        resolve(rs);
      });
    });
  }
  verify(token: string){
    return this.customerHttp.verify(token);
  }
  logout() {
    this.customerInfo = null;
    this.customer.next(null);
    this.router.navigate(['login']);
  }
}
