import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items = [
    {
      translate: 'BASE.HOME',
      url: 'home',
      type:'c'
    },
    {
      translate: 'Đăng ký dịch vụ',
      url: 'register/service',
      type: 'c'
    },
    {
      translate: 'Hỗ trợ dịch vụ',
      url: '1',
      type: 'c'
    },
    {
      translate: 'Dịch vụ tiền mặt',
      url: 'xx',
      type: 'c'
    },
    {
      translate: 'Thanh toán',
      url: 'xx',
      type: 'c'
    },
    {
      translate: 'Báo cáo',
      url: 'xx',
      type: 'c'
    },
    {
      translate: 'Hướng dẫn sử dụng',
      url: '',
      type: 'c',
      download: 'y'
    }
  ]

  constructor(
  ) { 
  
  }

  ngOnInit(): void {
  }

}
