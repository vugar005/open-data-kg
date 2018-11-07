import { NgModule } from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FooterComponent } from '../footer/footer.component';
import { MatRippleModule } from '@angular/material';
import { SharedUploadModule } from './shared-upload.module';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
    imports: [
      SharedUploadModule,
      TranslateModule.forChild({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    ],
    exports: [
      FontAwesomeModule,
      TranslateModule,
      SwiperModule,
      FooterComponent,
      MatRippleModule
    ],
    providers: [
      {
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
      }
    ],
    declarations: [FooterComponent]
  }
)
export class SharedModule {

}
