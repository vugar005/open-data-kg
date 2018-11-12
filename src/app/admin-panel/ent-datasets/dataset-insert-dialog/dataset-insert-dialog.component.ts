import { Component, OnInit, ViewChild, Inject, ViewContainerRef, AfterViewInit } from '@angular/core';
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
@Component({
  selector: 'app-dataset-insert-dialog',
  templateUrl: './dataset-insert-dialog.component.html',
  styleUrls: ['./dataset-insert-dialog.component.scss']
})
export class DatasetInsertDialogComponent implements OnInit {
  @ViewChild('f') ntForm: NgForm;
  apps$: Observable<any>;
  orgTypes$: Observable<SelectType[]>;
  config: ApiConfig;
  config2: ApiConfig;
  config3: ApiConfig;
  faPlusCircle = faPlusCircle;
  newDataId: string;
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
        this.newDataId = res.kv.id;
        console.log(this.newDataId);
        this.setConfigs();
      }
     }
    initDialog(table: NtTableComponent, row = null) {
     this.dialog.open(DatasetCategoryInsertComponent, {
         data: { table: table, row: row || undefined}
       });
     }
     initDialog2(table: NtTableComponent, row = null) {
      this.dialog.open(DatasetKeywordInsertComponent, {
          data: { table: table, row: row || undefined}
        });
      }
      initDialog3(table: NtTableComponent, row = null) {
        this.dialog.open(DatasetApiInsertComponent, {
            data: { table: table, row: row || undefined}
          });
        }
        setConfigs() {
          this.config = {
            getApi: 'api/post/Permission/Datasets/GetDatasetCategoryList',
            insertApi: 'api/post/Permission/Datasets/InsertNewDatasetCategory',
            updateApi: 'api/post/Permission/Datasets/UpdateDatasetCategory',
            deleteApi: 'api/post/Permission/Datasets/DeleteDatasetCategory',
            additionalFormData : {
              datasetId: this.data.row ? this.data.row.id : this.newDataId
            }
          };
             this.config2 = {
               getApi: 'api/post/Permission/Datasets/GetDatasetKeywordList',
               insertApi: 'api/post/Permission/Datasets/InsertNewDatasetKeyword',
               updateApi: 'api/post/Permission/Datasets/UpdateDatasetKeyword',
               deleteApi: 'api/post/Permission/Datasets/DeleteDatasetKeyword',
               additionalFormData : {
                 datasetId: this.data.row ? this.data.row.id : this.newDataId
               }
             };
             this.config3 = {
              getApi: 'api/post/Permission/Datasets/GetDatasetApiList',
              insertApi: 'api/post/Permission/Datasets/InsertNewDatasetApi',
              updateApi: 'api/post/Permission/Datasets/UpdateDatasetApi',
              deleteApi: 'api/post/Permission/Datasets/DeleteDatasetApi',
              additionalFormData : {
                datasetId: this.data.row ? this.data.row.id : this.newDataId
              }
            };
        }
   ngOnInit() {
     this.setConfigs();
   }
}
