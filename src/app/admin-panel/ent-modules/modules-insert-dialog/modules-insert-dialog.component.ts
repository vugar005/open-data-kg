import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {NgxFormUtils} from 'ngx-form-utils';
import { Observable } from 'rxjs';
import { SharedAdminService } from '../../shared/shared-admin.service';
@Component({
  selector: 'modules-insert-dialog',
  templateUrl: './modules-insert-dialog.component.html',
  styleUrls: ['./modules-insert-dialog.component.scss']
})
export class ModulesInsertDialogComponent implements OnInit{
  @ViewChild('f') ntForm: NgForm;
  apps$: Observable<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModulesInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedAdminService
  ) {}
  ngOnInit() {
    this.apps$ = this.sharedService.getModTypes('api/get/Permission/Applications/GetApplicationList');
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
