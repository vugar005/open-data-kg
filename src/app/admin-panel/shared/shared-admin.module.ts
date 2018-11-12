import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import {NtTableModule, NtTableService} from 'nt-table';
import { MatMenuModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormUtilsModule } from 'ngx-form-utils';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from 'src/app/auth/token.inteceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from 'src/app/shared/interceptors/api.interceptor';
import { RbacAllowDirective } from 'src/app/shared/directives/rbac-allow.directive';
import { SharedUploadModule } from 'src/app/shared/shared-upload.module';
@NgModule({
  imports: [],
  exports: [
     FontAwesomeModule,
     NtTableModule,
     FormUtilsModule,
     MatMenuModule,
     MatButtonModule,
     MatFormFieldModule,
     MatSelectModule,
     MatInputModule,
     MatDialogModule,
     FormsModule,
     RbacAllowDirective,
     SharedUploadModule,
    ],
  declarations: [
    RbacAllowDirective
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    NtTableService
  ],
})
export class SharedAdminModule { }
