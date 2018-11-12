import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutes } from './admin-panel.routing';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { RightAsideComponent } from './right-aside/right-aside.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedAdminService } from './shared/shared-admin.service';
import { AdminPanelService } from './admin-panel.service';
import { AdminModulesResolver } from './shared/resolvers/admin-modules.resolver';
import { SharedAcrossModule } from '../shared/shared-across.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,
    AdminPanelRoutes,
    SharedAcrossModule
  ],
  declarations: [
    AdminPanelComponent,
    AdminHeaderComponent,
    LeftAsideComponent,
    RightAsideComponent,
  ],
  providers: [
    SharedAdminService,
    AdminPanelService,
    AdminModulesResolver
  ]
})
export class AdminPanelModule { }
