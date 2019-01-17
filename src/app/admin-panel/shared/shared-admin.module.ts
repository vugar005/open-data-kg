import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule} from '@angular/core';
import {NtTableModule, NtTableService} from 'nt-table';
import { MatMenuModule, MatButtonModule, MatFormFieldModule, MatInputModule,
        MatDialogModule, MatSelectModule, MatIconModule, MatStepperModule,
        MatDatepickerModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { FormUtilsModule } from 'ngx-form-utils';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from 'src/app/auth/token.inteceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from 'src/app/shared/interceptors/api.interceptor';
import { SharedUploadModule } from 'src/app/shared/shared-upload.module';
import { HttpClientBusyModule } from 'ngx-httpclient-busy';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { SharedRbacModule } from 'src/app/shared/shared-rbac.module';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { SharedService } from 'src/app/shared/shared.service';
import { ErrorInterceptor } from 'src/app/shared/interceptors/error.interceptor';
import { LangInterceptor } from 'src/app/shared/interceptors/lang.interceptor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

export const MY_FORMATS = {
  parse: {
    dateInput: 'L'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};
@NgModule({
  imports: [
    CKEditorModule
  ],
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
    SharedTranslateModule,
    CKEditorModule
    ],
  declarations: [
  ],
  providers: [
    NtTableService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: LangInterceptor,  multi: true },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    { provide: MAT_DATE_LOCALE,
      deps: [SharedService],
      useFactory: (sharedService) => sharedService.getCurentLocale()
    },
  ],
})
export class SharedAdminModule { }
