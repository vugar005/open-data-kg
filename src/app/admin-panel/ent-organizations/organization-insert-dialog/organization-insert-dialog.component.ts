import { Component, OnInit, ViewChild, Inject, ViewContainerRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ModulesInsertDialogComponent } from '../../ent-modules/modules-insert-dialog/modules-insert-dialog.component';
import { NgxFormUtils } from 'ngx-form-utils';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { UploadFileDialogComponent } from '../../ent-users/user-insert-dialog/upload-file-dialog/upload-file-dialog.component';
@Component({
  selector: 'app-organization-insert-dialog',
  templateUrl: './organization-insert-dialog.component.html',
  styleUrls: ['./organization-insert-dialog.component.scss']
})
export class OrganizationInsertDialogComponent implements AfterViewInit {
  @ViewChild('f') ntForm: NgForm;
  apps$: Observable<any>;
  orgTypes$: Observable<SelectType[]>;
  id: string;
  faAddressCard = faAddressCard;
  faPhone = faPhone;
  imgId: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModulesInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {
    console.log(data);
    this.orgTypes$ = this.sharedService.getTypesByParentId('1000001', '1000001');
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
    onClose(res) {
     if (res && res.kv && res.kv.id) {
       this.id = res.kv.id;
     }
    }
    ngAfterViewInit() {
      if (this.data && this.data.row && this.data.row.id) {
        this.id = this.data.row.id;
      }
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
