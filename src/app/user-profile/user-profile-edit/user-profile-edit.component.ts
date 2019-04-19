import { ProfileUploaderAdapter } from './../profile-uploader.adapter';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './../../shared/shared.service';
import { SelectType } from './../../shared/models/select-type.model';
import { UploadFileDialogComponent } from './../../admin-panel/upload-file-dialog/upload-file-dialog.component';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model.';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { TableModel } from 'src/app/shared/models/table.model';
import { AutoSetUser } from 'src/app/auth/store/auth.actions';
import { getUser } from 'src/app/auth/store/auth.selectors';
import * as moment from 'moment';
@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  @ViewChild('f') ntForm: NgForm;
  genders$: Observable<SelectType[]>;
  hide = true;
  hideOld = true;
  maxDate = new Date(1994, 9, 30);
  startDate = new Date(1990, 0, 1);
  adapter = new ProfileUploaderAdapter(this.http);
  user: User;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  public  dialogRef: MatDialogRef<UserProfileEditComponent>,
  private dialog: MatDialog,
  private sharedService: SharedService,
  private http: HttpClient,
  private store: Store<AppState>
  ) {
    this.genders$ = this.sharedService.getTypes('181010384504309277');
    this.store.select(getUser)
    .subscribe(res => this.user = {...res});
  //  this.user.birthdate = new Date(this.user.birthdate.toString());
  }

  ngOnInit() {
    // this.user$.subscribe(res => {
    //   console.log(res.birthdate);
    //   setTimeout(() => {
    //     // const birthdate = (this.ntForm.controls['birthdate'].value);
    //     // console.log(new Date(birthdate));
    //     // return;
    //     // this.ntForm.controls['birthdate'].setValue(birthdate.toDate());
    //     // console.log(this.ntForm);
    //   }, 100);
    // });
  }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }
    onUpload() {
      const dialogRef = this.dialog.open(UploadFileDialogComponent, {data: {adapter: this.adapter}});
      dialogRef.afterClosed().subscribe(res => {
        if (res) {
           this.ntForm.controls['photoFileId'].setValue(res);
           this.user.photoFileId = res;
          }
        dialogRef.close();
      });
    }
    onRemoveFile(id: string) {
      this.sharedService.removeFile(id).subscribe(res => this.ntForm.controls['photoFileId'].setValue(undefined));
   }
    onSubmit(f: NgForm) {
     this.http.post('api/post/profile/change',  f.value).subscribe((res: any) => {
     if (res.code === 'INVALID_PARAMS') {
      this.sharedService.createNotification('error', res.message['kg']);
     } else {
       this.refetchUser();
       this.dialogRef.close();
     }
     });
    }
    refetchUser() {
     this.http.post<any>('api/post/user/check', {})
     .subscribe(res => {
       if (res && res.data) {
        this.store.dispatch(new AutoSetUser(res.data));
       }
     })
    }

}
