import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InlineSVGModule } from 'ng-inline-svg';
import { SwiftTransStatusPipe } from './pipes/swift-trans-status.pipe';
import { CurrencyMaskDirective } from './directives/currency-mask.directive';
import { SwiftProgressStatusPipe } from './pipes/swift-progress-status.pipe';
import { CardActivityStatusPipe } from './pipes/card-activity-status.pipe';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
  declarations: [
    PaginationComponent,
    SwiftTransStatusPipe,
    CurrencyMaskDirective,
    SwiftProgressStatusPipe,
    CardActivityStatusPipe,
  ],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({}),
    BsDatepickerModule.forRoot(),
    InlineSVGModule,
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  exports: [
    PaginationComponent,
    NgxLoadingModule,
    InlineSVGModule,
    BsDatepickerModule,
    TimepickerModule,
    ModalModule,
    SwiftTransStatusPipe,
    CurrencyMaskDirective,
    SwiftProgressStatusPipe,
    CardActivityStatusPipe,
  ],
  providers: [
    SwiftTransStatusPipe,
    SwiftProgressStatusPipe,
    CardActivityStatusPipe,
  ],
})
export class SharedModule {}
