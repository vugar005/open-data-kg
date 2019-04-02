import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SharedService } from 'src/app/shared/shared.service';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';

@Component({
  selector: 'app-dataset-category-insert',
  templateUrl: './dataset-category-insert.component.html',
  styleUrls: ['./dataset-category-insert.component.scss']
})
export class DatasetCategoryInsertComponent {

  @ViewChild('f') ntForm: NgForm;
  catTypes$: Observable<SelectType[]>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DatasetCategoryInsertComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService
  ) {
    this.catTypes$ = this.sharedService.getTypes('1000004');
  }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }
}
