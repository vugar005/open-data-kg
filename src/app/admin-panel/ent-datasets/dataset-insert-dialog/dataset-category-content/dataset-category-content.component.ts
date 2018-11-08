import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { DatasetCategoryInsertDialogComponent } from './dataset-category-insert-dialog/dataset-category-insert-dialog.component';

@Component({
  selector: 'dataset-category-content',
  templateUrl: './dataset-category-content.component.html',
  styleUrls: ['./dataset-category-content.component.scss']
})
export class DatasetCategoryContentComponent implements AfterViewInit {

  @Input() id: string;
  @ViewChild('table') table: NtTableComponent;
  config: any = {};
  faPlusCircle = faPlusCircle;
  constructor(private dialog: MatDialog) { }
  initDialog(table: NtTableComponent, row = null) {
   const ref = this.dialog.open(DatasetCategoryInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }
  ngAfterViewInit() {
    this.config = {
      getApi: 'api/post/Permission/Datasets/GetDatasetCategoryList',
      insertApi: 'api/post/Permission/Datasets/InsertNewDatasetCategory',
      updateApi: 'api/post/Permission/Datasets/UpdateDatasetCategory',
      deleteApi: 'api/post/Permission/Datasets/DeleteDatasetCategory',
      additionalFormData : {
        datasetId: this.id
      }
    };
  }

}
