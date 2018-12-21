import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntDatasetsComponent } from './ent-datasets.component';
import { EntDatasetsRoutes } from './ent-datasets.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { DatasetInsertDialogComponent } from './dataset-insert-dialog/dataset-insert-dialog.component';
import { MatExpansionModule, MatTabsModule, MatDatepickerModule } from '@angular/material';
import { DatasetApiInsertComponent } from './dataset-insert-dialog/dataset-api-insert/dataset-api-insert.component';
import { DatasetKeywordInsertComponent } from './dataset-insert-dialog/dataset-keyword-insert/dataset-keyword-insert.component';
import { DatasetCategoryInsertComponent } from './dataset-insert-dialog/dataset-category-insert/dataset-category-insert.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    EntDatasetsRoutes,
    MatExpansionModule,
    MatTabsModule,
    CKEditorModule
  ],
  declarations: [
    EntDatasetsComponent,
    DatasetInsertDialogComponent,
    DatasetApiInsertComponent,
    DatasetCategoryInsertComponent,
    DatasetKeywordInsertComponent
  ],
  entryComponents: [
    DatasetInsertDialogComponent,
    DatasetApiInsertComponent,
    DatasetKeywordInsertComponent,
    DatasetCategoryInsertComponent
  ]
})
export class EntDatasetsModule {}
