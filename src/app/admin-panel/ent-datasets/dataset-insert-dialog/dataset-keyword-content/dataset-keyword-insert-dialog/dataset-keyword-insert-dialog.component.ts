import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-dataset-keyword-insert-dialog',
  templateUrl: './dataset-keyword-insert-dialog.component.html',
  styleUrls: ['./dataset-keyword-insert-dialog.component.scss']
})
export class DatasetKeywordInsertDialogComponent  {
  keywordTypes$: Observable<SelectType[]>;
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DatasetKeywordInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService
  ) {
    this.keywordTypes$ = this.sharedService.getTypes('1000003');
    console.log(data);
    console.log(this.data.table.config);
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
}
