import { NgxSimpleTypeAheadModule } from 'ngx-simple-typeahead';
import { ImgSrcPipeModule } from './pipes/img-src-pipe.module';
import { SharedTranslateModule } from './shared-translate.module';
import { ProgressSpinnerComponent } from './../progress-spinner/progress-spinner.component';
import { GlobalNavComponent } from './../global-nav/global-nav.component';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatRippleModule, MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
import { SharedUploadModule } from './shared-upload.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ScrollListenerDirective } from './directives/scroll-listener.directive';
import { CommentsModule } from '../comments/comments.module';
import { LangNavComponent } from '../lang-nav/lang-nav.component';
import { GlobalNavModule } from '../global-nav/global-nav.module';
import { QuicklinkModule } from 'ngx-quicklink';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    FooterComponent,
    ScrollListenerDirective,
    GlobalNavComponent,
    LangNavComponent,
    ProgressSpinnerComponent
  ],
    imports: [
      CommonModule,
      SharedUploadModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      CommentsModule,
      NgxSimpleTypeAheadModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      SharedTranslateModule,
      ImgSrcPipeModule,
      GlobalNavModule,
      QuicklinkModule
    ],
    exports: [
      CommonModule,
      FontAwesomeModule,
      SharedTranslateModule,
      SwiperModule,
      FooterComponent,
      MatRippleModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      ScrollListenerDirective,
      GlobalNavComponent,
      LangNavComponent,
      NgxSimpleTypeAheadModule,
      MatButtonModule,
      CommentsModule,
      MatProgressSpinnerModule,
      ProgressSpinnerComponent,
      ImgSrcPipeModule,
      GlobalNavModule,
      QuicklinkModule
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
