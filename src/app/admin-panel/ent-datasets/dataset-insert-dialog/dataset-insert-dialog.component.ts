import { FileManagerUploaderAdapter } from './../../file-manager/file-manager-uploader.adapter';
import { Component, OnInit, ViewChild, Inject, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ModulesInsertDialogComponent } from '../../ent-modules/modules-insert-dialog/modules-insert-dialog.component';
import { SharedService } from 'src/app/shared/shared.service';
import { NgxFormUtils } from 'ngx-form-utils';
import { NtTableComponent } from 'nt-table';
import { ApiConfig } from 'nt-table/lib/api-config.model';
import { DatasetApiInsertComponent } from './dataset-api-insert/dataset-api-insert.component';
import { DatasetCategoryInsertComponent } from './dataset-category-insert/dataset-category-insert.component';
import { DatasetKeywordInsertComponent } from './dataset-keyword-insert/dataset-keyword-insert.component';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { getUserOrg } from 'src/app/auth/store/auth.selectors';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { addAttachFileToolbar } from 'src/app/shared/shared-methods';
import { FileManagerDialogComponent } from '../../file-manager-dialog/file-manager-dialog.component';
import { SharedAdminService } from '../../shared/shared-admin.service';
import { TableEditerAction, NgxNativeTableComponent } from 'ngx-native-table';
import { ApplicationsInsertDialogComponent } from '../../ent-applications/applications-insert-dialog/applications-insert-dialog.component';

@Component({
  selector: 'app-dataset-insert-dialog',
  templateUrl: './dataset-insert-dialog.component.html',
  styleUrls: ['./dataset-insert-dialog.component.scss']
})
export class DatasetInsertDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('f') ntForm: NgForm;
  apps$: Observable<any>;
  orgTypes$: Observable<SelectType[]>;
  configCat: ApiConfig;
  configKeyword: ApiConfig;
  configApi: ApiConfig;
  faPlusCircle = faPlusCircle;
  selectedIndex = 0;
  adapter = new FileManagerUploaderAdapter(this.http);
  startDate = new Date(1990, 0, 1);
  plugins = {plugins: 'link test', toolbar: 'test'};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModulesInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private http: HttpClient,
    private sharedAdminService: SharedAdminService
  ) {
    this.store.select(getUserOrg)
    .pipe(
      take(1)
    )
    .subscribe(res => {
      if (res.id) {
        this.orgTypes$ = this.sharedService.getTypesByParentId('1000001', res.id);
      }
    });
  }
  onOptClickCat(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, DatasetCategoryInsertComponent);
   }
  onOptClickKeyword(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, DatasetKeywordInsertComponent);
   }
  onOptClickApi(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, DatasetApiInsertComponent);
   }
  onEditorInit() {
    return addAttachFileToolbar(this.dialog, FileManagerDialogComponent);
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
    ngAfterViewInit() {
    }

    onClose(res) {
      if (res && res.kv && res.kv.id) {
        this.ntForm.setValue({
          ...this.ntForm.value,
          id: res.kv.id
        });
        this.setConfigs();
        this.selectedIndex += 1;
      }
     }
        setConfigs() {
          this.configCat = {
            getApi: 'api/post/Permission/Datasets/GetDatasetCategoryList',
            insertApi: 'api/post/Permission/Datasets/InsertNewDatasetCategory',
            updateApi: 'api/post/Permission/Datasets/UpdateDatasetCategory',
            deleteApi: 'api/post/Permission/Datasets/DeleteDatasetCategory',
            additionalFormData : {
              datasetId: this.data.row ? this.data.row.id : this.ntForm.value.id
            }
          };
             this.configKeyword = {
               getApi: 'api/post/Permission/Datasets/GetDatasetKeywordList',
               insertApi: 'api/post/Permission/Datasets/InsertNewDatasetKeyword',
               updateApi: 'api/post/Permission/Datasets/UpdateDatasetKeyword',
               deleteApi: 'api/post/Permission/Datasets/DeleteDatasetKeyword',
               additionalFormData : {
                 datasetId: this.data.row ? this.data.row.id : this.ntForm.form.value.id
               }
             };
             this.configApi = {
              getApi: 'api/post/Permission/Datasets/GetDatasetApiList',
              insertApi: 'api/post/Permission/Datasets/InsertNewDatasetApi',
              updateApi: 'api/post/Permission/Datasets/UpdateDatasetApi',
              deleteApi: 'api/post/Permission/Datasets/DeleteDatasetApi',
              additionalFormData : {
                datasetId: this.data.row ? this.data.row.id : this.ntForm.value.id
              }
        };
      }
   ngOnInit() {
   this.setConfigs();
   }

}
