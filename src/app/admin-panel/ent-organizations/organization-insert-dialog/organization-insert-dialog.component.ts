import { SharedService } from './../../../shared/shared.service';
import { SelectType } from './../../../shared/models/select-type.model';
import { Component, OnInit, ViewChild, Inject, ViewContainerRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ModulesInsertDialogComponent } from '../../ent-modules/modules-insert-dialog/modules-insert-dialog.component';
import { NgxFormUtils } from 'ngx-form-utils';
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
import { TableEditerAction, NgxNativeTableComponent, ApiConfig } from 'ngx-native-table';
@Component({
  selector: 'app-organization-insert-dialog',
  templateUrl: './organization-insert-dialog.component.html',
  styleUrls: ['./organization-insert-dialog.component.scss']
})
export class OrganizationInsertDialogComponent implements OnInit {
  @ViewChild('f') ntForm: NgForm;
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
    private sharedAdminService: SharedAdminService
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
  onOptClickAddress(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, OrgAddressInsertComponent);
   }
  onOptClickContact(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, OrgContactInsertComponent);
   }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
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
}
