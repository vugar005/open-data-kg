import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { registerLocaleData, CommonModule } from '@angular/common';
import localeKy from '@angular/common/locales/ky';
import { CoreModule } from './core.module';
registerLocaleData(localeKy);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      CoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
