import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntDatasetsComponent } from './ent-datasets.component';
import { EntDatasetsRoutes } from './ent-datasets.routing';
import { DatasetCategoryContentComponent } from './dataset-insert-dialog/dataset-category-content/dataset-category-content.component';
import { DatasetKeywordContentComponent } from './dataset-insert-dialog/dataset-keyword-content/dataset-keyword-content.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { DatasetInsertDialogComponent } from './dataset-insert-dialog/dataset-insert-dialog.component';
import { DatasetCategoryInsertDialogComponent } from './dataset-insert-dialog/dataset-category-content/dataset-category-insert-dialog/dataset-category-insert-dialog.component';
import { DatasetKeywordInsertDialogComponent } from './dataset-insert-dialog/dataset-keyword-content/dataset-keyword-insert-dialog/dataset-keyword-insert-dialog.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    EntDatasetsRoutes,
    MatExpansionModule,
  ],
  declarations: [
    EntDatasetsComponent,
    DatasetInsertDialogComponent,
    DatasetCategoryContentComponent,
    DatasetCategoryInsertDialogComponent,
    DatasetKeywordInsertDialogComponent,
    DatasetKeywordContentComponent
  ],
  entryComponents: [
    DatasetInsertDialogComponent,
    DatasetCategoryInsertDialogComponent,
    DatasetKeywordInsertDialogComponent
  ]
})
export class EntDatasetsModule {}
