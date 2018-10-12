import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';
import { NewsListComponent } from './news-list/news-list.component';
import { SharedModule } from '../shared/shared.module';
import { NewsItemComponent } from './news-list/news-item/news-item.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutes,
    SharedModule
  ],
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsItemComponent
  ]
})
export class NewsModule { }
