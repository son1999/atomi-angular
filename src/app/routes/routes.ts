import { Routes } from '@angular/router';
import { LayoutSecondComponent } from '../components/layout/layout-second/layout-second.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { AuthGuard } from '../_core/guards/auth/auth.guard';
import { ChangePasswordComponent } from './customer/change-password/change-password.component';
import { ForgotPasswordComponent } from './customer/forgot-password/forgot-password.component';
import { LoginComponent } from './customer/login/login.component';
import { RegisterComponent } from './customer/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutSecondComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      }
    ]
  },
  {
    path: 'customer',
    component: LayoutSecondComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
  },
  {
    path: 'apps',
    component: LayoutSecondComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),
  },
  {
    path: 'login',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'login/:token',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'forgot-password',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ForgotPasswordComponent
      }
    ]
  },
  {
    path: 'register',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: RegisterComponent
      }
    ]
  },
  { path: '**', redirectTo: '/' },
]