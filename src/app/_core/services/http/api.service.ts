import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerService } from 'src/app/routes/customer/_services/customer.service';
import { CONFIG } from 'src/app/_utils/constants';
import { ApiResponseDataInterface } from '../../interfaces/api-response-data.interface';
import { ToastrService } from '../toastr/toastr.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = CONFIG.BASE_API_URL;
  private headers = {
    'Content-Type': 'application/json',
  };
  constructor(
    private http: HttpClient,
    private customerService: CustomerService,
    private toastr: ToastrService
  ) {}
  post(
    path: string,
    body: any,
    RHeaders = {}
  ): Promise<ApiResponseDataInterface> {
    return new Promise((resolve) => {
      const headers: any = Object.assign(this.headers, RHeaders);
      headers['Authorization'] = `Bearer ${this.customerService.customerInfo?.token}`;
      this.http
        .post(`${this.baseUrl}/${path}`, body, {
          headers: headers,
        })
        .subscribe(
          (rs: any) => {
            if (rs.statusCode === CONFIG.CODE.FORBIDDEN) {
              this.customerService.logout();
              this.toastr.warning('Phiên đăng nhập đã hết!');
            }
            resolve(rs);
          },
          (err) => {
            resolve({
              statusCode: CONFIG.CODE.INTERNAL_SERVER_ERROR,
              data: null,
              msg: 'Không kết nối được tới server!',
            });
          }
        );
    });
  }
  put(
    path: string,
    body: any,
    RHeaders = {}
  ): Promise<ApiResponseDataInterface> {
    return new Promise((resolve) => {
      const headers: any = Object.assign(this.headers, RHeaders);
      headers['Authorization'] = `Bearer ${this.customerService.customerInfo?.token}`;
      this.http
        .put(`${this.baseUrl}/${path}`, body, {
          headers: headers,
        })
        .subscribe(
          (rs: any) => {
            if (rs.statusCode === CONFIG.CODE.FORBIDDEN) {
              this.customerService.logout();
              this.toastr.warning('Phiên đăng nhập đã hết!');
            }
            resolve(rs);
          },
          (err) => {
            resolve({
              statusCode: CONFIG.CODE.INTERNAL_SERVER_ERROR,
              data: null,
              msg: 'Không kết nối được tới server!',
            });
          }
        );
    });
  }
  get(
    path: string,
    RParams: any = {},
    RHeaders = {}
  ): Promise<ApiResponseDataInterface> {
    return new Promise((resolve) => {
      const headers: any = Object.assign(this.headers, RHeaders);
      headers['Authorization'] = `Bearer ${this.customerService.customerInfo?.token}`;
      const params = new HttpParams();
      for (let k in RParams) {
        params.set(k, RParams[k]);
      }
      this.http
        .get(`${this.baseUrl}/${path}`, {
          headers: headers,
          params,
        })
        .subscribe(
          (rs: any) => {
            if (rs.statusCode === CONFIG.CODE.FORBIDDEN) {
              this.customerService.logout();
              this.toastr.warning('Phiên đăng nhập đã hết!');
            }
            resolve(rs);
          },
          (err) => {
            resolve({
              statusCode: CONFIG.CODE.INTERNAL_SERVER_ERROR,
              data: null,
              msg: 'Không kết nối được tới server!',
            });
          }
        );
    });
  }
}
