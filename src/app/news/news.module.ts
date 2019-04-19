import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';
import { NewsListComponent } from './news-list/news-list.component';
import { SharedModule } from '../shared/shared.module';
import { NewsItemComponent } from './news-list/news-item/news-item.component';
import { NewsDetailComponent } from './news-list/news-detail/news-detail.component';
import { OtherItemComponent } from './news-list/news-detail/other-item/other-item.component';
import { NewsFiltersComponent } from './news-list/news-filters/news-filters.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../shared/interceptors/error.interceptor';
import { TokenInterceptor } from '../auth/token.inteceptor';
import { APIInterceptor } from '../shared/interceptors/api.interceptor';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutes,
    SharedModule,
    FooterModule
  ],
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsDetailComponent,
    OtherItemComponent,
    NewsFiltersComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
  ]
})
export class NewsModule { }
