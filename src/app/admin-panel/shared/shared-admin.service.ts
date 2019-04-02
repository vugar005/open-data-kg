import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableModel } from 'src/app/shared/models/table.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';

@Injectable()
export class SharedAdminService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  tableActionImplement(
    actionObject: TableEditerAction,
    table: NgxNativeTableComponent,
    templateComponent
  ) {
    console.log(actionObject.type);

    switch (actionObject.type) {
      case 'toggleColumnView': {
        const data = actionObject.data;
        const body = {
            viewName: data.tableName,
            columns: data.hiddenColumnNames
        };
        this.postTableData('api/post/InsertHiddenColumn', body).subscribe();
        break;
      }
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
      case 'confirm': {
        const body = {
          kv: {
            id: actionObject.data.id
          }
        };
        this.postTableData(table.config.confirmApi, body).subscribe();
          break;
      }
      case 'unConfirm': {
        const body = {
          kv: {
            id: actionObject.data.id
          }
        };
        this.postTableData(table.config.unConfirmApi, body).subscribe();
          break;
      }
      case 'active': {
        const body = {
          kv: {
            id: actionObject.data.id
          }
        };
        this.postTableData(table.config.activateApi, body).subscribe();
         break;
      }
      case 'deactive': {
        const body = {
          kv: {
            id: actionObject.data.id
          }
        };
        this.postTableData(table.config.deactivateApi, body).subscribe();
          break;
      }
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
  postTableData(url: string, kv: Object = {}): Observable<TableModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<TableModel>(url, JSON.stringify(kv), httpOptions);
  }
}
