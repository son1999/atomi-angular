import { Component, OnInit } from '@angular/core';
import { AsideMenuService } from './aside-menu.service';
import { AsideMenuItem } from './_interfaces/aside-menu-item.interface';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { TabsService } from 'src/app/modules/tab-wizards/_services/tabs.service';
import { Tab } from 'src/app/modules/tab-wizards/_interfaces/tab.interface';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AsideMenuComponent implements OnInit {
  items: AsideMenuItem[] = [];
  ic_path = 'assets/icons/svg/aside-menu/';
  itemStateLU: any = {};
  tabActive: Tab | null = null;

  constructor(
    private menuService : AsideMenuService,
    private tabService: TabsService,
  ) {
    this.tabService.tabActive$.subscribe(rs => {
      this.tabActive = rs;
    })
  }

  ngOnInit(): void {
    this.menuService.menuConfigs$.subscribe(rs => {
      this.items = rs.items;
    })
  }
  onClickMenuItem(item: AsideMenuItem){
    if(item.type === 'TAB'){
      this.tabService.open(item.url, item.title);
    }
  }
  isOpenChange(change: boolean, item: AsideMenuItem){
      this.itemStateLU[item.url] = change;
  }
  isOpen(item: AsideMenuItem){
    return this.itemStateLU[item.url] && this.itemStateLU[item.url];
  }
  isActive(item: AsideMenuItem){
    return this.tabActive && this.tabActive.id === item.url;
  }
}
