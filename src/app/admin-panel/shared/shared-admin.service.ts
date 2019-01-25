import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableEditerAction } from 'ngx-native-table';
import { NgxNativeTableComponent } from 'ngx-native-table';
import { ApiConfig } from 'ngx-native-table';

@Injectable()
export class SharedAdminService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  tableActionImplement(
    actionObject: TableEditerAction,
    table: NgxNativeTableComponent,
    templateComponent
  ) {
    switch (actionObject.type) {
      case 'insert':
        this.dialog.open(templateComponent, {
          data: { table: table, row: undefined }
        });
        console.log('on insert');
        break;
      case 'edit':
        this.dialog.open(templateComponent, {
          data: { table: table, row: actionObject.data }
        });
        console.log('on edit');
        break;
      case 'confirm':
      console.log('confirm')
      this.onStatusUpdate(table.config.confirmApi, actionObject.data);
        break;
      case 'unConfirm':
      this.onStatusUpdate(table.config.unConfirmApi, actionObject.data);
        break;
      case 'active':
       this.onStatusUpdate(table.config.activateApi, actionObject.data);
        break;
      case 'deactive':
      this.onStatusUpdate(table.config.activateApi, actionObject.data);
        break;
    }
  }

  appendAdditionFormData(kvData, config: ApiConfig) {
    const additionalFormData = config.additionalFormData;
    if (additionalFormData) {
      Object.keys(additionalFormData).forEach(
        key => (kvData[key] = additionalFormData[key])
      );
    }
  }
  onStatusUpdate(url: string, data: any) {
    const body = {
      kv: {
        id: data.id
      }
    };
    this.http.post(url, JSON.stringify(body)).subscribe();
  }
}
