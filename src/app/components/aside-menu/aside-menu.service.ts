import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { items } from './aside-menu.configs';
import { AsideMenuItem } from './_interfaces/aside-menu-item.interface';
@Injectable({
  providedIn: 'root',
})
export class AsideMenuService {
  private menuConfigs = new BehaviorSubject<any>({ items: [] });
  menuConfigs$ = this.menuConfigs.asObservable();
  constructor(
    private authService: AuthService
  ) {
  }
  init() {
    const role = this.authService.getRole();
    const itemConfigs = JSON.parse(JSON.stringify(items));
    const verifiedItems = this.checkPermissions(itemConfigs, role);
    this.setMenuItems(verifiedItems);
  }
  setMenuItems(items: any) {
    const current = this.menuConfigs.getValue();
    current.items = items;
    this.menuConfigs.next(current);
  }
  checkPermissions(items: AsideMenuItem[], role: string){
    const result: AsideMenuItem[] = [];
    items.forEach(item => {
        if(item.subs) item.subs = this.checkPermissions(item.subs, role);
        if(role && item.roles.indexOf(role) > -1){
          result.push(item);
        }
    });
    return result;
  }
  reset(){
    this.setMenuItems([]);
  }
}
