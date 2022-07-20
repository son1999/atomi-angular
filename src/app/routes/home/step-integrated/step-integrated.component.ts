import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-integrated',
  templateUrl: './step-integrated.component.html',
  styleUrls: ['./step-integrated.component.scss']
})
export class StepIntegratedComponent implements OnInit {
  steps = [
    {
      icon: 'sign_in.png',
      name: 'Bước 1',
      des: 'Đăng ký tài khoản'
    },
    {
      icon: 'mouse.png',
      name: 'Bước 2',
      des: 'Tạo ứng dụng'
    },
    {
      icon: 'upload.png',
      name: 'Bước 3',
      des: 'Tích hợp và test'
    },
    {
      icon: 'subtract_lett.png',
      name: 'Bước 4',
      des: 'Yêu cầu Golive'
    },
    {
      icon: 'order.png',
      name: 'Bước 5',
      des: 'Nhận thông tin'
    },
    {
      icon: 'desktop.png',
      name: 'Bước 6',
      des: 'Go Live'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
