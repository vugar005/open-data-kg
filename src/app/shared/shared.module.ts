import { NgModule } from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatRippleModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { SharedUploadModule } from './shared-upload.module';
import { ModuleSidebarComponent } from './components/module-sidebar/module-sidebar.component';
import { CommonModule } from '@angular/common';
import { DatasetBoxComponent } from './components/dataset-box/dataset-box.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatasetListComponent } from './components/dataset-list/dataset-list.component';
import { GlobalNavComponent } from '../global-nav/global-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { DatasetDetailComponent } from './components/dataset-detail/dataset-detail.component';
import { RouterModule } from '@angular/router';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    ModuleSidebarComponent,
    DatasetBoxComponent,
    DatasetListComponent,
    DatasetDetailComponent,
    FooterComponent,
    GlobalNavComponent,
    StarRatingComponent
  ],
    imports: [
      CommonModule,
      SharedUploadModule,
      ReactiveFormsModule,
      MatCheckboxModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      RouterModule,
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
      ModuleSidebarComponent,
      DatasetBoxComponent,
      DatasetListComponent,
      MatCheckboxModule,
      ReactiveFormsModule,
      MatExpansionModule,
      GlobalNavComponent,
      StarRatingComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      RouterModule
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
