import { UploadFileDialogComponent } from './../../admin-panel/upload-file-dialog/upload-file-dialog.component';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';
import { TryRegister } from '../store/auth.actions';
import { MatDialog } from '@angular/material';
import { getApiUrl } from '../store/auth.selectors';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  apiUrl$: Observable<string>;
  constructor(private store: Store<AppState>, private sharedService: SharedService, private dialog: MatDialog) {
   // this.roles$ = this.sharedService.getModTypes('api/get/Permission/UserRoles/GetUserRoleList');
    this.genders$ = this.sharedService.getTypes('181010384504309277');
    this.apiUrl$ = this.store.select(getApiUrl);
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
 getErrors(str) {
   if (!(this.ntForm && this.ntForm.controls[str] )) {return;}
  if (!this.ntForm.controls[str].touched) {return; }

    return getFormErrors(this.ntForm, str);
  }
  ngAfterViewInit() {
  }
  onSubmit(f: NgForm) {
  //
    Object.keys(this.ntForm.controls)
      .map(controlName => this.ntForm.controls[controlName])
      .forEach((control: any) => {
        control.markAsTouched();
      });
      if (!f.valid) {return; }
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
  onRemoveFile(id: string) {
    this.sharedService.removeFile(id).subscribe(res => this.imgId = undefined);
 }


}
