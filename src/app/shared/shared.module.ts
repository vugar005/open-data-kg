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
import { MatRippleModule, MatCheckboxModule } from '@angular/material';
import { SharedUploadModule } from './shared-upload.module';
import { ModuleSidebarComponent } from './components/module-sidebar/module-sidebar.component';
import { CommonModule } from '@angular/common';
import { DatasetBoxComponent } from './components/dataset-box/dataset-box.component';
import { ReactiveFormsModule } from '@angular/forms';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    ModuleSidebarComponent,
    DatasetBoxComponent,
    FooterComponent
  ],
    imports: [
      CommonModule,
      SharedUploadModule,
      ReactiveFormsModule,
      MatCheckboxModule,
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
      MatRippleModule,
      ModuleSidebarComponent,
      DatasetBoxComponent,
      MatCheckboxModule,
      ReactiveFormsModule,
    ],
    providers: [
      {
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
      }
    ]
  }
)
export class SharedModule {

}
