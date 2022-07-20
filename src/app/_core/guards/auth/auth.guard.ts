import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CustomerService } from 'src/app/routes/customer/_services/customer.service';
// import { AuthService } from 'src/app/modules/auth/_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private customerService: CustomerService
  ){

  }
  canActivate() {
    if (!this.customerService.isAuthenticated()) {
      this.customerService.logout();
      return false;
    }
    return true;
  }
  
}
