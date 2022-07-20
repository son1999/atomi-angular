import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RoutesModule } from './routes/routes.module';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './_core/core.module';
import { ToastrModule } from 'ngx-toastr';
import { CONFIG } from './_utils/constants';
import {CustomerModule} from './routes/customer/customer.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    RoutesModule,
    ComponentsModule,
    ToastrModule.forRoot({
      timeOut: CONFIG.TOASTR_TIMEOUT,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.cubeGrid,
      backdropBackgroundColour: 'rgba(0, 0, 0, 0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#0034a4e6',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
    }),
    CustomerModule
  ],
  providers: [DecimalPipe, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
