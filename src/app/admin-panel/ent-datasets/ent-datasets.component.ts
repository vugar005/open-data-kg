import { Component } from '@angular/core';
import { DatasetInsertDialogComponent } from './dataset-insert-dialog/dataset-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, NgxNativeTableComponent } from 'ngx-native-table';

@Component({
  selector: 'ent-datasets',
  templateUrl: './ent-datasets.component.html',
  styleUrls: ['./ent-datasets.component.scss']
})
export class EntDatasetsComponent {
  config = {
    getApi: 'api/post/Permission/Datasets/GetDatasetList',
    insertApi: 'api/post/Permission/Datasets/InsertNewDataset',
    updateApi: 'api/post/Permission/Datasets/UpdateDataset',
    deleteApi: 'api/post/Permission/Datasets/DeleteDataset',
    activateApi: 'api/post/Permission/Datasets/ActiveDataset',
    deactivateApi: 'api/post/Permission/Datasets/DeactiveDataset'
  };
  constructor(private sharedAdminService: SharedAdminService) {}
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(
      action,
      table,
      DatasetInsertDialogComponent
    );
  }
}
