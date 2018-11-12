import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { DatasetKeywordInsertDialogComponent } from './dataset-keyword-insert-dialog/dataset-keyword-insert-dialog.component';

@Component({
  selector: 'dataset-keyword-content',
  templateUrl: './dataset-keyword-content.component.html',
  styleUrls: ['./dataset-keyword-content.component.scss']
})
export class DatasetKeywordContentComponent implements AfterViewInit {

  @Input() id: string;
  @ViewChild('table') table: NtTableComponent;
  config: any = {};
  faPlusCircle = faPlusCircle;
  constructor(private dialog: MatDialog) { }
  initDialog(table: NtTableComponent, row = null) {
   const ref = this.dialog.open(DatasetKeywordInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }

  ngAfterViewInit() {
    this.config = {
      getApi: 'api/post/Permission/Datasets/GetDatasetKeywordList',
      insertApi: 'api/post/Permission/Datasets/InsertNewDatasetKeyword',
      updateApi: 'api/post/Permission/Datasets/UpdateDatasetKeyword',
      deleteApi: 'api/post/Permission/Datasets/DeleteDatasetKeyword',
      additionalFormData : {
        datasetId: this.id
      }
    };
  }

}
