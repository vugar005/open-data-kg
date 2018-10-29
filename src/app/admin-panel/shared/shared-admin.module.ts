import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import {NtTableModule} from 'nt-table';
import { MatMenuModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { FormUtilsModule } from 'ngx-form-utils';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from 'src/app/auth/token.inteceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  imports: [] ,
  exports: [
     FontAwesomeModule,
     NtTableModule,
     MatMenuModule,
     MatButtonModule,
     MatFormFieldModule,
     MatSelectModule,
     MatInputModule,
     MatDialogModule,
     FormsModule,
     FormUtilsModule
    ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
})
export class SharedAdminModule { }
