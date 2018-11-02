import { Component, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';
import { SharedAdminService } from '../../shared/shared-admin.service';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';

@Component({
  selector: 'app-user-insert-dialog',
  templateUrl: './user-insert-dialog.component.html',
  styleUrls: ['./user-insert-dialog.component.scss']
})
export class UserInsertDialogComponent  {
  roles$: Observable<any>;
  genders$: Observable<SelectType[]>;
  hide = true;
  hideOld = true;
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedAdminService
  ) {
    this.roles$ = this.sharedService.getModTypes('api/post/Permission/UserRoles/GetUserRoleList');
    this.genders$ = this.sharedService.getTypes('181010384504309277');
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
