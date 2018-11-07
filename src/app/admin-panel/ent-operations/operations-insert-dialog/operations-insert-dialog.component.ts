import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModulesInsertDialogComponent } from '../../ent-modules/modules-insert-dialog/modules-insert-dialog.component';
import { NgxFormUtils } from 'ngx-form-utils';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-operations-insert-dialog',
  templateUrl: './operations-insert-dialog.component.html',
  styleUrls: ['./operations-insert-dialog.component.scss']
})
export class OperationsInsertDialogComponent implements OnInit {
  @ViewChild('f') ntForm: NgForm;
  modules$: Observable<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModulesInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService
  ) {}
  ngOnInit() {
    this.modules$ = this.sharedService.getModTypes('api/get/Permission/Modules/GetModuleList');
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
