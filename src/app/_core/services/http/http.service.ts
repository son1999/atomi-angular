import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from 'src/app/_utils/constants';
import { ApiResponseDataInterface } from '../../interfaces/api-response-data.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  headers = {
    'Content-Type': 'application/json',
  };
  private baseUrl = CONFIG.BASE_API_URL;

  constructor(private http: HttpClient) {}
  post(path: string, body: any, headers = {}): Promise<ApiResponseDataInterface>{
    return new Promise((resolve) => {
      this.http.post(`${this.baseUrl}/${path}`, body, {
        headers: { ...this.headers, ...headers },
      }).subscribe((rs: any) => {
          resolve(rs)
      }, err => {
        resolve({
          statusCode: CONFIG.CODE.INTERNAL_SERVER_ERROR,
          data: null,
          msg: 'Không kết nối được tới server!'
        })
      })
    })
  }
  get(path: string) {
    return this.http.get(`${this.baseUrl}/${path}`);
  }
}
