import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableEditerAction } from 'ngx-native-table/table-action.model';
import { NgxNativeTableComponent } from 'ngx-native-table';
import { ApiConfig } from 'ngx-native-table/lib/api-config.model';

@Injectable()
export class SharedAdminService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  tableActionImplement(actionObject: TableEditerAction, table: NgxNativeTableComponent, templateComponent) {
    switch (actionObject.type) {
      case 'insert':
      this.dialog.open(templateComponent, {
        data: { table: table, row: undefined}
      });
     console.log('on insert');
        break;
      case 'edit':
      this.dialog.open(templateComponent, {
        data: { table: table, row: actionObject.data}
      });
     console.log('on edit');
        break;
      case 'confirm':
     //   this.onConfirm();
     console.log(actionObject.data)
     console.log('on confirm');
        break;
      case'unConfirm':
      //  this.onUnConfirm();
      console.log('on confirm');
        break;
    }
  }

   appendAdditionFormData(kvData, config: ApiConfig) {
    const additionalFormData = config.additionalFormData;
    if (additionalFormData) {
      Object.keys(additionalFormData).forEach(key => kvData[key] = additionalFormData[key]);
    }
}
}
