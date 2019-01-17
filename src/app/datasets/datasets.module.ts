import { GeojsonPreviewComponent } from './dataset-file-preview/geojson-preview/geojson-preview.component';
import { DatasetFilePreviewComponent } from './dataset-file-preview/dataset-file-preview.component';
import { EffectsModule } from '@ngrx/effects';
import { CommentsModule } from './../comments/comments.module';
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
import { MatExpansionModule, MatDialogModule} from '@angular/material';
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
import { DatasetFiltersComponent } from './dataset-filters/dataset-filters.component';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatasetsRoutes,
    MatExpansionModule,
    SharedModule,
    MatDialogModule,
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
     DatasetFiltersComponent,
     GeojsonPreviewComponent,
     ShareDialogComponent
    ],
    entryComponents: [ShareDialogComponent],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    ]
})
export class DatasetsModule { }
