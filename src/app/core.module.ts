import { HeaderPopupComponent } from './header/header-popup/header-popup.component';
import { DatasetBoxModule } from './datasets/dataset-box.module';
import { NgModule, LOCALE_ID, SkipSelf, Optional } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { AdminGuard } from './auth/admin.guard';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { TokenInterceptor } from './auth/token.inteceptor';
import { APIInterceptor } from './shared/interceptors/api.interceptor';
import { LangInterceptor } from './shared/interceptors/lang.interceptor';
import { HeaderComponent } from './header/header.component';
import { NavStyleChangeDirective } from './shared/directives/nav-style-change.directive';
import { HeaderToggleDirective } from './shared/directives/header-toggle.directive';
import { TotalDatasetsCountComponent } from './global-nav/total-datasets-count/total-datasets-count.component';
import { ClassChangerDirective } from './shared/directives/class-changer.directive';
import { MouseScrollIconComponent } from './shared/components/mouse-scroll-icon/mouse-scroll-icon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { SharedAcrossModule } from './shared/shared-across.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { SharedModule } from './shared/shared.module';
import { SharedRbacModule } from './shared/shared-rbac.module';
import { HttpClientBusyModule } from 'ngx-httpclient-busy';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NotLoggedInDialogComponent } from './not-loggedIn-dialog/not-loggedIn-dialog.component';
import { HttpLoaderFactory } from './shared/shared-translate.module';
import { FormUtilsModule } from 'ngx-form-utils';
import { UserProfileEditComponent } from './user-profile/user-profile-edit/user-profile-edit.component';
import { MaterialModule } from './material.module';
import { UserResolver } from './shared/resolvers/user.resolver';
import { ImgSrcPipeModule } from './shared/pipes/img-src-pipe.module';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { NewsSidebarComponent } from './home/landing-page/news-sidebar/news-sidebar.component';
import { NewsSidebarItemComponent } from './home/landing-page/news-sidebar/news-sidebar-item/news-sidebar-item.component';
import { DesktopComponent } from './home/landing-page/desktop/desktop.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {NgxSimpleTypeAheadModule} from 'ngx-simple-typeahead';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import localeRu from '@angular/common/locales/ru';
import localeKy from '@angular/common/locales/ky';
import { WaveParticlesModule } from './home/landing-page/wave-particles/wave-particles.module';
registerLocaleData(localeRu);
registerLocaleData(localeKy);
@NgModule({
declarations: [
  HeaderComponent,
  LandingPageComponent,
  NavStyleChangeDirective,
  HeaderToggleDirective,
  TotalDatasetsCountComponent,
  ClassChangerDirective,
  HeaderPopupComponent,
  NewsSidebarComponent,
  NewsSidebarItemComponent,
  MouseScrollIconComponent,
  DesktopComponent,
  NotFoundComponent,
  UserProfileComponent,
  UserProfileEditComponent,
],
entryComponents: [NotLoggedInDialogComponent, UserProfileEditComponent],
imports: [
  CommonModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  SharedModule,
  AuthModule,
  HttpClientModule,
  StoreModule.forRoot(reducers, {metaReducers}),
  EffectsModule.forRoot([]),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
  Ng2IziToastModule,
  SharedAcrossModule,
  ClickOutsideModule,
  PerfectScrollbarModule,
  NgxSimpleTypeAheadModule,
  SharedRbacModule,
  FormUtilsModule,
  PerfectScrollbarModule,
  DatasetBoxModule,
  MaterialModule,
  ImgSrcPipeModule,
  WaveParticlesModule,
  HttpClientBusyModule.forRoot(),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
}),
],
exports: [
  BrowserAnimationsModule,
  AppRoutingModule,
  SharedModule,
  HeaderComponent,
  LandingPageComponent,
  NavStyleChangeDirective,
  HeaderToggleDirective,
  TotalDatasetsCountComponent,
  ClassChangerDirective,
  HeaderPopupComponent,
  NewsSidebarComponent,
  NewsSidebarItemComponent,
  MouseScrollIconComponent,
  DesktopComponent,
  NotFoundComponent,
  UserProfileComponent,
  AuthModule,
  HttpClientModule,
  StoreModule,
  EffectsModule,
  !environment.production ? StoreDevtoolsModule : [],
  Ng2IziToastModule,
  SharedAcrossModule,
  ClickOutsideModule,
  PerfectScrollbarModule,
  SharedModule,
  NgxSimpleTypeAheadModule,
  SharedRbacModule,
  HttpClientBusyModule,
  TranslateModule,
  MaterialModule,
  ImgSrcPipeModule,
  WaveParticlesModule
],
providers: [
  SharedService,
  UserResolver,
  AdminGuard,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
  {provide: HTTP_INTERCEPTORS, useClass: LangInterceptor,  multi: true },
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },
  { provide: LOCALE_ID,
    deps: [SharedService],
    useFactory: (sharedService) => sharedService.getCurentLocale()
  },

]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
