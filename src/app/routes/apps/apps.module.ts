import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePublicKeyComponent } from './change-public-key/change-public-key.component';
import { ConfirmChangeComponent } from './_popups/confirm-change/confirm-change.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {path: '', component: AppsComponent},
  {
    path: 'create',
    component: CreateNewComponent,
  },
  {
    path: 'detail/:id',
    component: AppDetailComponent,
  },
  {
    path: 'public-key/:id',
    component: ChangePublicKeyComponent
  }
] 
@NgModule({
  declarations: [
    AppsComponent,
    CreateNewComponent,
    AppDetailComponent,
    ChangePublicKeyComponent,
    ConfirmChangeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AppsModule { }
