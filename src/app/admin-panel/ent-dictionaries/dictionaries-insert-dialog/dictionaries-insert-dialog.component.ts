import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';
import { Observable } from 'rxjs';
import { SharedAdminService } from '../../shared/shared-admin.service';

@Component({
  selector: 'app-dictionaries-insert-dialog',
  templateUrl: './dictionaries-insert-dialog.component.html',
  styleUrls: ['./dictionaries-insert-dialog.component.scss']
})
export class DictionariesInsertDialogComponent  {
  @ViewChild('f') ntForm: NgForm;
  dicTypes$: Observable<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DictionariesInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedAdminService
  ) {
   this.dicTypes$ = sharedService.getModTypes('api/post/Permission/DictionaryTypes/GetDictionaryTypeList');
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
}
