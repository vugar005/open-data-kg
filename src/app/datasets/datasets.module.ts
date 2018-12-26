import { DatasetFilePreviewComponent } from './dataset-file-preview/dataset-file-preview.component';
import { ForLoggedInDirective } from './../shared/directives/forLoggedIn.directive';
import { EffectsModule } from '@ngrx/effects';
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
import { MatExpansionModule} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { DatasetSearchResultComponent } from './dataset-search-result/dataset-search-result.component';
import { DatasetSearchBoxComponent } from './dataset-search-box/dataset-search-box.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../shared/interceptors/error.interceptor';
import { TokenInterceptor } from '../auth/token.inteceptor';
import { APIInterceptor } from '../shared/interceptors/api.interceptor';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';
import { DatasetBoxModule } from './dataset-box.module';
import { StarRatingModule } from '../shared/star-rating.module';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store/dataset.reducer';
import { DatasetEffects } from './store/dataset.effects';
import { SharedRbacModule } from '../shared/shared-rbac.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatasetsRoutes,
    MatExpansionModule,
    SharedModule,
    MatExpansionModule,
    TypeheadModule,
    CommentsModule,
    DatasetBoxModule,
    StarRatingModule,
    SharedRbacModule,
    StoreModule.forFeature('dataset', fromStore.reducer),
    EffectsModule.forFeature([DatasetEffects])
  ],
  declarations: [
     DatasetsComponent,
     DatasetByCatComponent,
     DatasetByOrgComponent,
     DatasetGroupListComponent,
     DatasetDetailComponent,
     DatasetFilePreviewComponent,
     DatasetSearchBoxComponent,
     DatasetSearchResultComponent,
     ModuleSidebarComponent,
     FeedbackBoxComponent,
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    ]
})
export class DatasetsModule { }
