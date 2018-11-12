import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'dataset-api-insert',
  templateUrl: './dataset-api-insert.component.html',
  styleUrls: ['./dataset-api-insert.component.scss']
})
export class DatasetApiInsertComponent {

  @ViewChild('f') ntForm: NgForm;
  formatTypes$: Observable<any>;
  versionTypes$: Observable<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DatasetApiInsertComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService
  ) {
    this.formatTypes$ = this.sharedService.getTypes('181116173908947318');
    this.versionTypes$ = this.sharedService.getTypes('181116181702942313');
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
