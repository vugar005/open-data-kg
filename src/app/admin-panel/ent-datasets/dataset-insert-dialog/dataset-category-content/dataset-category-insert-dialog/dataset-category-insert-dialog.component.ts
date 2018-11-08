import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';
import { SharedService } from 'src/app/shared/shared.service';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';

@Component({
  selector: 'app-dataset-category-insert-dialog',
  templateUrl: './dataset-category-insert-dialog.component.html',
  styleUrls: ['./dataset-category-insert-dialog.component.scss']
})
export class DatasetCategoryInsertDialogComponent {
  @ViewChild('f') ntForm: NgForm;
  catTypes$: Observable<SelectType[]>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DatasetCategoryInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService
  ) {
    this.catTypes$ = this.sharedService.getTypes('1000004');
    console.log(data);
    console.log(this.data.table.config)
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
