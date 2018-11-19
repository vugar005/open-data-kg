import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MainPageComponent } from './landing-page/main-page/main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WaveParticlesComponent } from './landing-page/wave-particles/wave-particles.component';
import { HeaderComponent } from './header/header.component';
import { LangNavComponent } from './lang-nav/lang-nav.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { NavStyleChangeDirective } from './shared/directives/nav-style-change.directive';
import { SharedService } from './shared/shared.service';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { TokenInterceptor } from './auth/token.inteceptor';
import { HeaderToggleDirective } from './shared/directives/header-toggle.directive';
import { APIInterceptor } from './shared/interceptors/api.interceptor';
import { AdminGuard } from './auth/admin.guard';
import { SharedAcrossModule } from './shared/shared-across.module';
import { ClassChangerDirective } from './shared/directives/class-changer.directive';
import { HeaderPopupComponent } from './header/header-popup/header-popup.component';
import { HttpClientBusyModule } from 'ngx-httpclient-busy';
import { NewsSidebarComponent } from './landing-page/news-sidebar/news-sidebar.component';
import { NewsSidebarItemComponent } from './landing-page/news-sidebar/news-sidebar-item/news-sidebar-item.component';
import { NewsSidebarItemListComponent } from './landing-page/news-sidebar/news-sidebar-item-list/news-sidebar-item-list.component';
import { CategoryOverviewComponent } from './global-nav/category-overview/category-overview.component';
import { MouseScrollIconComponent } from './shared/components/mouse-scroll-icon/mouse-scroll-icon.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { DesktopComponent } from './landing-page/desktop/desktop.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TotalDatasetsCountComponent } from './global-nav/total-datasets-count/total-datasets-count.component';
import { MatTabsModule, MatCheckboxModule } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CategoryService } from './categories/category.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    MainPageComponent,
    WaveParticlesComponent,
    LangNavComponent,
    GlobalNavComponent,
    NavStyleChangeDirective,
    HeaderToggleDirective,
    TotalDatasetsCountComponent,
    ClassChangerDirective,
    HeaderPopupComponent,
    NewsSidebarComponent,
    NewsSidebarItemComponent,
    NewsSidebarItemListComponent,
    CategoryOverviewComponent,
    MouseScrollIconComponent,
    DesktopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    Ng2IziToastModule,
    SharedAcrossModule,
    ClickOutsideModule,
    MatTabsModule,
    MatCheckboxModule,
    PerfectScrollbarModule,
    HttpClientBusyModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    SharedService,
    AdminGuard,
    CategoryService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
