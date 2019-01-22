import { SharedService } from 'src/app/shared/shared.service';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { UploadFileDialogComponent } from './../../admin-panel/ent-users/user-insert-dialog/upload-file-dialog/upload-file-dialog.component';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';
import { NgxFormUtils } from 'ngx-form-utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  @ViewChild('f') ntForm: NgForm;
  imgId: string;
  genders$: Observable<SelectType[]>;
  hide = true;
  hideOld = true;
  maxDate = new Date(1994, 9, 30);
  startDate = new Date(1990, 0, 1);
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<UserProfileEditComponent>,
  private dialog: MatDialog,
  private sharedService: SharedService
  ) {
    this.genders$ = this.sharedService.getTypes('181010384504309277');
  }

  ngOnInit() {
    console.log(this.data.user)
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
    onUpload() {
      const dialogRef = this.dialog.open(UploadFileDialogComponent);
      dialogRef.afterClosed().subscribe(res => {
        console.log(res);
        if (res) { this.imgId = res; }
        dialogRef.close();
      });
    }

}
