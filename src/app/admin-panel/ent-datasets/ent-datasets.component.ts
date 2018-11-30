import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DatasetInsertDialogComponent } from './dataset-insert-dialog/dataset-insert-dialog.component';
import { NtTableComponent } from 'nt-table';
import { ApiConfig } from 'nt-table/lib/api-config.model';
import { HttpClient } from '@angular/common/http';

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
    deleteApi: 'api/post/Permission/Datasets/DeleteDataset'};
  constructor(private dialog: MatDialog, private http: HttpClient) { }
  initDialog(table: NtTableComponent, row = null) {
    const ref = this.dialog.open(DatasetInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }
  onOptClick(opt: any, table: NtTableComponent) {
   if (opt.attribute === 'activate') {
    const body = {
      kv: {
        id: opt.row.id
      }
    };
     this.http.post('api/post/Permission/Datasets/ActiveDataset', JSON.stringify(body)).subscribe(res => table.updateTable());
   } else if (opt.attribute === 'deactivate') {
    const body = {
      kv: {
        id: opt.row.id
      }
    };
     this.http.post('api/post/Permission/Datasets/DeactiveDataset', JSON.stringify(body)).subscribe(res => table.updateTable());
   }
  }
}
