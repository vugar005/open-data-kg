import { FileManagerModule } from './file-manager/file-manager.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutes } from './admin-panel.routing';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { RightAsideComponent } from './right-aside/right-aside.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedAdminService } from './shared/shared-admin.service';
import { AdminPanelService } from './admin-panel.service';
import { AdminModulesResolver } from './shared/resolvers/admin-modules.resolver';
import { SharedAcrossModule } from '../shared/shared-across.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { MatMenuModule } from '@angular/material';
import { SharedRbacModule } from '../shared/shared-rbac.module';
import { AdminProfilePopupComponent } from './right-aside/admin-profile-popup/admin-profile-popup.component';
import { ErrorInterceptor } from '../shared/interceptors/error.interceptor';
import { TokenInterceptor } from '../auth/token.inteceptor';
import { APIInterceptor } from '../shared/interceptors/api.interceptor';
import { LangInterceptor } from '../shared/interceptors/lang.interceptor';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    SharedRbacModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,
    AdminPanelRoutes,
    SharedAcrossModule,
    FileManagerModule
  ],
  declarations: [
    AdminPanelComponent,
    AdminProfilePopupComponent,
    AdminHeaderComponent,
    LeftAsideComponent,
    RightAsideComponent,
  ],
  providers: [
    SharedAdminService,
    AdminPanelService,
    AdminModulesResolver,

  ]
})
export class AdminPanelModule { }
