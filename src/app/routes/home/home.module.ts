import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { StepIntegratedComponent } from './step-integrated/step-integrated.component';
import { EnvironmentIntegratedComponent } from './environment-integrated/environment-integrated.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
] 

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    StepIntegratedComponent,
    EnvironmentIntegratedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
