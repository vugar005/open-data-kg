import { Component, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInDown, fadeIn} from 'ng-animate';
import { SharedService } from 'src/app/shared/shared.service';
import { UploadFileDialogComponent } from './upload-file-dialog/upload-file-dialog.component';
@Component({
  selector: 'app-user-insert-dialog',
  templateUrl: './user-insert-dialog.component.html',
  styleUrls: ['./user-insert-dialog.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 2, delay: 2 }
    }))])]
})
export class UserInsertDialogComponent  {
  @ViewChild('f') ntForm: NgForm;
  roles$: Observable<any>;
  genders$: Observable<SelectType[]>;
  hide = true;
  hideOld = true;
  maxDate = new Date(1994, 9, 30);
  startDate = new Date(1990, 0, 1);
  imgId: string;
  slideInDown = slideInDown;
  bounceInDown = true;
  fadeIn = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {
    this.roles$ = this.sharedService.getModTypes('api/post/Permission/UserRoles/GetUserRoleList');
    this.genders$ = this.sharedService.getTypes('181010384504309277');
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
    onDateChange(e) {
      console.log(e);
      console.log(e.value);
    }
    onUpload() {
      console.log('ded');
      const dialogRef = this.dialog.open(UploadFileDialogComponent);
      dialogRef.afterClosed().subscribe(res => {
        console.log(res);
        if (res) { this.imgId = res; }
        dialogRef.close();
      });
    }

}
