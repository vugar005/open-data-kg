import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { registerLocaleData} from '@angular/common';
import localeKy from '@angular/common/locales/ky';
import { CoreModule } from './core.module';
import { NotLoggedInDialogComponent } from './not-loggedIn-dialog/not-loggedIn-dialog.component';
import { HomeComponent } from './home/home.component';
registerLocaleData(localeKy);


@NgModule({
   declarations: [
      AppComponent,
      NotLoggedInDialogComponent,
      HomeComponent
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
