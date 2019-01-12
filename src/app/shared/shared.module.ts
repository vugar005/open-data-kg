import { GlobalNavComponent } from './../global-nav/global-nav.component';
import { NgModule } from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatRippleModule} from '@angular/material';
import { SharedUploadModule } from './shared-upload.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ScrollListenerDirective } from './directives/scroll-listener.directive';
import { CommentsModule } from '../comments/comments.module';
import { LangNavComponent } from '../lang-nav/lang-nav.component';
import { TypeheadModule } from 'ngx-typehead-dir';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    FooterComponent,
    ScrollListenerDirective,
    GlobalNavComponent,
    LangNavComponent
  ],
    imports: [
      CommonModule,
      SharedUploadModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      CommentsModule,
      TypeheadModule,
      TranslateModule.forChild({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    ],
    exports: [
      CommonModule,
      FontAwesomeModule,
      TranslateModule,
      SwiperModule,
      FooterComponent,
      MatRippleModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      ScrollListenerDirective,
      GlobalNavComponent,
      LangNavComponent,
      TypeheadModule,
      CommentsModule
    ],
    providers: [
      {
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
      },
    ]
  }
)
export class SharedModule {

}
