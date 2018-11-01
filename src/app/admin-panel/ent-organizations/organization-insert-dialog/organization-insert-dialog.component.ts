import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModulesInsertDialogComponent } from '../../ent-modules/modules-insert-dialog/modules-insert-dialog.component';
import { NgxFormUtils } from 'ngx-form-utils';

@Component({
  selector: 'app-organization-insert-dialog',
  templateUrl: './organization-insert-dialog.component.html',
  styleUrls: ['./organization-insert-dialog.component.scss']
})
export class OrganizationInsertDialogComponent {

  @ViewChild('f') ntForm: NgForm;
  apps$: Observable<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModulesInsertDialogComponent>,
    public viewRef: ViewContainerRef,
  ) {}
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
}
