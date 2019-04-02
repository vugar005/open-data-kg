import { FileManagerUploaderAdapter } from './../../file-manager/file-manager-uploader.adapter';
import { Component, OnInit, ViewChild, Inject, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ModulesInsertDialogComponent } from '../../ent-modules/modules-insert-dialog/modules-insert-dialog.component';
import { SharedService } from 'src/app/shared/shared.service';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';
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
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

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
    private tableUtilsService: TableUtilsService
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
    this.tableUtilsService.tableActionImplement(action, table, DatasetCategoryInsertComponent);
   }
  onOptClickKeyword(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.tableUtilsService.tableActionImplement(action, table, DatasetKeywordInsertComponent);
   }
  onOptClickApi(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.tableUtilsService.tableActionImplement(action, table, DatasetApiInsertComponent);
   }
  onEditorInit() {
    return addAttachFileToolbar(this.dialog, FileManagerDialogComponent);
  }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
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
   console.log(this.data)
   }

}
