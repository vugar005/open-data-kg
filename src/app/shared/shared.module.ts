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
import { MatRippleModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { SharedUploadModule } from './shared-upload.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TypeheadModule } from 'ngx-typehead-dir';
import { ScrollListenerDirective } from './directives/scroll-listener.directive';
import { CommentsModule } from '../comments/comments.module';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    FooterComponent,
    ScrollListenerDirective,
  ],
    imports: [
      CommonModule,
      SharedUploadModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      CommentsModule,
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
