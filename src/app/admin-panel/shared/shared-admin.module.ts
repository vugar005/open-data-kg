import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import {NtTableModule, NtTableService} from 'nt-table';
import { MatMenuModule, MatButtonModule, MatFormFieldModule, MatInputModule,
        MatDialogModule, MatSelectModule, MatIconModule, MatStepperModule,
        MatDatepickerModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { FormUtilsModule } from 'ngx-form-utils';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from 'src/app/auth/token.inteceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from 'src/app/shared/interceptors/api.interceptor';
import { RbacAllowDirective } from 'src/app/shared/directives/rbac-allow.directive';
import { SharedUploadModule } from 'src/app/shared/shared-upload.module';
import { HttpClientBusyModule } from 'ngx-httpclient-busy';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { SharedRbacModule } from 'src/app/shared/shared-rbac.module';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
export const MY_FORMATS = {
  parse: {
    dateInput: 'L'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
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
     SharedUploadModule,
     MatStepperModule,
     MatIconModule,
    HttpClientBusyModule,
    MatDatepickerModule,
    MatMomentDateModule,
    SharedRbacModule,
    SharedTranslateModule
    ],
  declarations: [
  ],
  providers: [
    NtTableService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'az' },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class SharedAdminModule { }
