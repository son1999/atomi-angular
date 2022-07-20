import { Component, OnInit } from '@angular/core';
import { CustomerInterface } from 'src/app/routes/customer/_interfaces';
import { CustomerService } from 'src/app/routes/customer/_services/customer.service';
import { trim } from 'lodash';
@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss']
})
export class UserBlockComponent implements OnInit {
  customerInfo: CustomerInterface | null = null;
  constructor(
    private customerService: CustomerService
  ) {
    this.customerService.customer$.subscribe(rs => this.customerInfo = rs);
  }

  ngOnInit(): void {
  }
  logout(){
    this.customerService.logout();
  }
  getFirstLetterFromName(){
    const nameArr = trim(this.customerInfo?.name).split(' ');
    return nameArr[nameArr.length - 1][0] || ''; 
  }
}
