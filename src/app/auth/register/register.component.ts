import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { NgxFormUtils } from 'ngx-form-utils';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';
import { TryRegister } from '../store/auth.actions';
import { MatDialog } from '@angular/material';
import { UploadFileDialogComponent } from '../../admin-panel/ent-users/user-insert-dialog/upload-file-dialog/upload-file-dialog.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('f') ntForm: NgForm;
  typed: any;
  roles$: Observable<any>;
  genders$: Observable<SelectType[]>;
  hide = true;
  hideOld = true;
  maxDate = new Date(1994, 9, 30);
  startDate = new Date(1990, 0, 1);
  imgId: string;
  bounceInDown = true;
  fadeIn = true;
  constructor(private store: Store<AppState>, private sharedService: SharedService, private dialog: MatDialog) {
   // this.roles$ = this.sharedService.getModTypes('api/get/Permission/UserRoles/GetUserRoleList');
    this.genders$ = this.sharedService.getTypes('181010384504309277');
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
  ngAfterViewInit() {
  }
  onSubmit(f: NgForm) {
    this.store.dispatch(new TryRegister(f.form.value));
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
