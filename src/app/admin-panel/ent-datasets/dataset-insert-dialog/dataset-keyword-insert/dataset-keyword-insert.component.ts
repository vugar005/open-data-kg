import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SharedService } from 'src/app/shared/shared.service';
import { NgxFormUtils } from 'ngx-form-utils';

@Component({
  selector: 'app-dataset-keyword-insert',
  templateUrl: './dataset-keyword-insert.component.html',
  styleUrls: ['./dataset-keyword-insert.component.scss']
})
export class DatasetKeywordInsertComponent  {

  keywordTypes$: Observable<SelectType[]>;
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DatasetKeywordInsertComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService
  ) {
    this.keywordTypes$ = this.sharedService.getTypes('1000003');
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
}
