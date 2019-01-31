import { SharedAcrossModule } from './../../shared/shared-across.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule} from '@angular/core';
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
import { ErrorInterceptor } from 'src/app/shared/interceptors/error.interceptor';
import { LangInterceptor } from 'src/app/shared/interceptors/lang.interceptor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FileManagerModule } from '../file-manager/file-manager.module';
import { ImgSrcPipeModule } from 'src/app/shared/pipes/img-src-pipe.module';
import { FileManagerDialogComponent } from '../file-manager-dialog/file-manager-dialog.component';
import { NgxNativeTableModule} from 'ngx-native-table';
import { SharedAdminService } from './shared-admin.service';
import { MaterialModule } from 'src/app/material.module';
@NgModule({
  imports: [
    CKEditorModule,
    SharedAcrossModule,
    EditorModule,
    ImgSrcPipeModule,
    FileManagerModule,
    NgxNativeTableModule,
    MaterialModule,
  ],
  exports: [
    FontAwesomeModule,
    FormUtilsModule,
    FormsModule,
    SharedUploadModule,
    HttpClientBusyModule,
    MatMomentDateModule,
    SharedRbacModule,
    SharedTranslateModule,
    CKEditorModule,
    SharedAcrossModule,
    EditorModule,
    ImgSrcPipeModule,
    FileManagerModule,
    NgxNativeTableModule,
    MaterialModule
    ],
  declarations: [
    FileManagerDialogComponent
  ],
  entryComponents: [FileManagerDialogComponent],
  providers: [
    SharedAdminService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: LangInterceptor,  multi: true },
  ],
})
export class SharedAdminModule { }
