import { Component, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';
import { SharedAdminService } from '../../shared/shared-admin.service';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
// tslint:disable-next-line:no-duplicate-imports

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
  maxDate = new Date(1994, 9, 30);
  startDate = new Date(1990, 0, 1);
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
    onDateChange(e) {
      console.log(e)
      console.log(e.value)
    }

}
