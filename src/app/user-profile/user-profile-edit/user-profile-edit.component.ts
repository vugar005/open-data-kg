import { HttpClient } from '@angular/common/http';
import { SharedService } from './../../shared/shared.service';
import { SelectType } from './../../shared/models/select-type.model';
import { UploadFileDialogComponent } from './../../admin-panel/upload-file-dialog/upload-file-dialog.component';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';
import { NgxFormUtils } from 'ngx-form-utils';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/util';

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
  private sharedService: SharedService,
  private http: HttpClient
  ) {
    this.genders$ = this.sharedService.getTypes('181010384504309277');
  }

  ngOnInit() {
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
    onSubmit(f: NgForm) {
      const body = {
        kv: {}
      };
      Object.keys(f.value).forEach( key => body.kv[key] = f.controls[key].value);
     this.http.post('api/post/profile/change',  body).subscribe(res => console.log(res));
    }

}
