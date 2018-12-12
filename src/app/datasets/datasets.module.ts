import { CommentsModule } from './../comments/comments.module';
import { TypeheadModule } from 'ngx-typehead-dir';
import { FeedbackBoxComponent } from './../shared/components/feedback-box/feedback-box.component';
import { FormsModule } from '@angular/forms';
import { DatasetGroupListComponent } from './dataset-group-list/dataset-group-list.component';
import { DatasetByCatComponent } from './dataset-by-cat/dataset-by-cat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetsComponent } from './datasets.component';
import { DatasetByOrgComponent } from './dataset-by-org/dataset-by-org.component';
import { ModuleSidebarComponent } from './module-sidebar/module-sidebar.component';
import { DatasetsRoutes } from './datasets.routing';
import { MatExpansionModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';
import { StarRatingComponent } from '../shared/components/star-rating/star-rating.component';
import { DatasetBoxComponent } from './dataset-box/dataset-box.component';
import { DatasetSearchResultComponent } from './dataset-search-result/dataset-search-result.component';
import { DatasetSearchBoxComponent } from './dataset-search-box/dataset-search-box.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../shared/interceptors/error.interceptor';
import { TokenInterceptor } from '../auth/token.inteceptor';
import { APIInterceptor } from '../shared/interceptors/api.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatasetsRoutes,
    MatExpansionModule,
    SharedModule,
    MatExpansionModule,
    TypeheadModule,
    CommentsModule
  ],
  declarations: [
     DatasetsComponent,
     DatasetByCatComponent,
     DatasetByOrgComponent,
     DatasetGroupListComponent,
     DatasetBoxComponent,
     DatasetSearchBoxComponent,
     DatasetSearchResultComponent,
     DatasetDetailComponent,
     ModuleSidebarComponent,
     FeedbackBoxComponent,
     StarRatingComponent
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    ]
})
export class DatasetsModule { }
