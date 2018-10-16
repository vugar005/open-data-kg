import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import {NtTableModule} from 'nt-table';
@NgModule({
  imports: [] ,
  exports: [
     FontAwesomeModule,
     NtTableModule
    ],
  declarations: [],
  providers: [
   // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class SharedModule { }
