import { Component, ViewChild } from '@angular/core';
import { DatasetInsertDialogComponent } from './dataset-insert-dialog/dataset-insert-dialog.component';
import {  NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

@Component({
  selector: 'ent-datasets',
  templateUrl: './ent-datasets.component.html',
  styleUrls: ['./ent-datasets.component.scss']
})
export class EntDatasetsComponent {
  @ViewChild('table') table: NgxNativeTableComponent;
  config = {
    getApi: 'api/post/Permission/Datasets/GetDatasetList',
    insertApi: 'api/post/Permission/Datasets/InsertNewDataset',
    updateApi: 'api/post/Permission/Datasets/UpdateDataset',
    deleteApi: 'api/post/Permission/Datasets/DeleteDataset',
    activateApi: 'api/post/Permission/Datasets/ActiveDataset',
    deactivateApi: 'api/post/Permission/Datasets/DeactiveDataset'
  };
  constructor(private tableUtilsService: TableUtilsService) {}
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, DatasetInsertDialogComponent);
   }
}
