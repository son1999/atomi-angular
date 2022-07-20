import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { LayoutComponent } from './layout/layout.component';
import { LayoutSecondComponent } from './layout/layout-second/layout-second.component';
import { LayoutThirdComponent } from './layout/layout-third/layout-third.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSecondComponent } from './header/header-second/header-second.component';
import { LogoWhiteComponent } from './base/logo-white/logo-white.component';
import { LogoComponent } from './base/logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './base/loading/loading.component';
import { AboutUsComponent } from './base/about-us/about-us.component';
import { ContactUsComponent } from './base/contact-us/contact-us.component';
import { ColLeftComponent } from './col-left/col-left.component';
import { MenuComponent } from './menu/menu.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { UserBlockComponent } from './base/user-block/user-block.component';
import { FooterSecondComponent } from './footer/footer-second/footer-second.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutSecondComponent,
    LayoutThirdComponent,
    HeaderComponent,
    HeaderSecondComponent,
    LogoWhiteComponent,
    LogoComponent,
    FooterComponent,
    LoadingComponent,
    AboutUsComponent,
    ContactUsComponent,
    ColLeftComponent,
    MenuComponent,
    UserBlockComponent,
    FooterSecondComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    BsDropdownModule,
    AccordionModule,
    RouterModule,
    TranslateModule,
    NgxLoadingModule
  ],
  exports: [
    LogoWhiteComponent,
    RouterModule,
    LoadingComponent,
  ]
})
export class ComponentsModule { }
