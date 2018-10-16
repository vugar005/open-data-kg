import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import {NtTableModule} from 'nt-table';
import { MatMenuModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { FormUtilsModule } from 'ngx-form-utils';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [] ,
  exports: [
     FontAwesomeModule,
     NtTableModule,
     MatMenuModule,
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatDialogModule,
     FormsModule,
     FormUtilsModule
    ],
  declarations: [],
  providers: [
   // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class SharedAdminModule { }
