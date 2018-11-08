import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DatasetInsertDialogComponent } from './dataset-insert-dialog/dataset-insert-dialog.component';
import { NtTableComponent } from 'nt-table';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'ent-datasets',
  templateUrl: './ent-datasets.component.html',
  styleUrls: ['./ent-datasets.component.scss']
})
export class EntDatasetsComponent {
  config: ApiConfig = {
    getApi: 'api/post/Permission/Datasets/GetDatasetList',
    insertApi: 'api/post/Permission/Datasets/InsertNewDataset',
    updateApi: 'api/post/Permission/Datasets/UpdateDataset',
    deleteApi: 'api/post/Permission/Datasets/DeleteDataset'
  };
  constructor(private dialog: MatDialog) { }
  initDialog(table: NtTableComponent, row = null) {
    const ref = this.dialog.open(DatasetInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }
}
