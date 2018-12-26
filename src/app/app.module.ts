import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { registerLocaleData} from '@angular/common';
import localeKy from '@angular/common/locales/ky';
import { CoreModule } from './core.module';
import { NotLoggedInDialogComponent } from './not-loggedIn-dialog/not-loggedIn-dialog.component';
registerLocaleData(localeKy);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
   declarations: [
      AppComponent,
      NotLoggedInDialogComponent
   ],
   imports: [
      BrowserModule,
      CoreModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
