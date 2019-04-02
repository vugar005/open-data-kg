import { SharedService } from './../../../shared/shared.service';
import { SelectType } from './../../../shared/models/select-type.model';
import { Component, OnInit, ViewChild, Inject, ViewContainerRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ModulesInsertDialogComponent } from '../../ent-modules/modules-insert-dialog/modules-insert-dialog.component';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { getUserOrg } from 'src/app/auth/store/auth.selectors';
import { take} from 'rxjs/operators';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { OrgAddressInsertComponent } from './org-address-insert/org-address-insert.component';
import { OrgContactInsertComponent } from './org-contact-insert/org-contact-insert.component';
import { UploadFileDialogComponent } from '../../upload-file-dialog/upload-file-dialog.component';
import { SharedAdminService } from '../../shared/shared-admin.service';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';
@Component({
  selector: 'app-organization-insert-dialog',
  templateUrl: './organization-insert-dialog.component.html',
  styleUrls: ['./organization-insert-dialog.component.scss']
})
export class OrganizationInsertDialogComponent implements OnInit {
  @ViewChild('f') ntForm: NgForm;
  @ViewChild('tableContact') tableContact: NgxNativeTableComponent;
  @ViewChild('tableAddress') tableAddress: NgxNativeTableComponent;
  apps$: Observable<any>;
  orgTypes$: Observable<SelectType[]>;
  faAddressCard = faAddressCard;
  imgId = '';
  faPlusCircle = faPlusCircle;
  faPhone = faPhone;
  configAddress: ApiConfig;
  configContact: ApiConfig;
  selectedIndex = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModulesInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private tableUtilsService: TableUtilsService
  ) {
    this.store.select(getUserOrg)
    .pipe(
      take(1)
    )
    .subscribe(res => {
      if (res.id) {
        this.orgTypes$ = this.sharedService.getTypesByParentId('1000001', res.orgTypeId);
      }
    });
  }
  onOptClickAddress(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.tableAddress, OrgAddressInsertComponent);
   }
  onOptClickContact(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.tableContact, OrgContactInsertComponent);
   }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }
    onClose(res) {
      if (res && res.kv && res.kv.id) {
        this.ntForm.setValue({
          ...this.ntForm.value,
          id: res.kv.id
        });
        console.log(this.ntForm);
        this.setConfigs();
        this.selectedIndex += 1;
      }
     }
       setConfigs() {
        this.configAddress = {...{
          getApi: 'api/post/Permission/Organizations/GetOrganizationAddressList',
          insertApi: 'api/post/Permission/Organizations/InsertNewOrganizationAddress',
          updateApi: 'api/post/Permission/Organizations/UpdateOrganizationAddress',
          deleteApi: 'api/post/Permission/Organizations/DeleteOrganizationAddress',
          additionalFormData : {
            ownerId: this.data.row ? this.data.row.id : this.ntForm.value.id
          }
        }};
        this.configContact = {...{
          getApi: 'api/post/Permission/Organizations/GetOrganizationContactList',
          insertApi: 'api/post/Permission/Organizations/InsertNewOrganizationContact',
          updateApi: 'api/post/Permission/Organizations/UpdateOrganizationContact',
          deleteApi: 'api/post/Permission/Organizations/DeleteOrganizationContact',
          additionalFormData : {
            ownerId: this.data.row ? this.data.row.id : this.ntForm.value.id
          }
        }
        };
      }

      ngOnInit() {
        this.setConfigs();
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
