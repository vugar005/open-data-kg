import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { RemoveConfirmComponent } from './remove-confirm/remove-confirm.component';
import { Observable, timer, combineLatest } from 'rxjs';
import { TableModel } from '../models/table.model';
import { isArray } from 'util';
import { switchMap } from 'rxjs/operators';
import { TableDialogConfig } from './table-utils';
import { TableEditerAction } from './native-table/table-action.model';
import { NgxNativeTableComponent } from './native-table/native-table.component';
import { ApiConfig } from './native-table/api-config.model';

@Injectable()
export class TableUtilsService {

  constructor(private http: HttpClient, private dialog: MatDialog) {}
  tableActionImplement(
    actionObject: TableEditerAction,
    table: NgxNativeTableComponent,
    templateComponent
  ) {
    console.log(actionObject);

    switch (actionObject.type.toLowerCase()) {
      case 'togglecolumnview': {
        const data = actionObject.data;
        const body = {
          viewName: data.tableName,
          columns: data.hiddenColumnNames
        };
        this.postTableData('api/post/InsertHiddenColumn', body, table).subscribe();
        break;
      }
      case 'insert':
        this.dialog.open(templateComponent, {
          data: { table: table, row: undefined },
          ...TableDialogConfig
        });
        break;
      case 'edit':
        this.dialog.open(templateComponent, {
          data: { table: table, row: actionObject.data},
         ...TableDialogConfig
        });
        break;
      case 'delete':
        const modalRef = this.dialog.open(RemoveConfirmComponent);
        modalRef.afterClosed().subscribe(res => {
          if (res) {
            this.removeData(actionObject.data, table);
          }
        });
        break;
      case 'confirm': {
        const body = {
          kv: {
            id: actionObject.data.id
          }
        };
        this.postTableData(table.config.confirmApi, body, table).subscribe();
        break;
      }
      case 'unconfirm': {
        const body = {
          kv: {
            id: actionObject.data.id
          }
        };
        this.postTableData(table.config.unConfirmApi, body, table).subscribe();
        break;
      }
      case 'active': {
        const body = {
          kv: {
            id: actionObject.data.id
          }
        };
        this.postTableData(table.config.activateApi, body, table).subscribe();
        break;
      }
      case 'deactive': {
        const body = {
          kv: {
            id: actionObject.data.id
          }
        };
        this.postTableData(table.config.deactivateApi, body, table).subscribe();
        break;
      }
    }
  }

  private appendAdditionFormData(data, config: ApiConfig) {
    if (! data.kv) { return data; }
    const kvData = data.kv;
    const additionalFormData = config.additionalFormData;
    if (additionalFormData) {
      Object.keys(additionalFormData).forEach(
        key => (kvData[key] = additionalFormData[key])
      );
    }
    return { kv: kvData};
  }
  postTableData(url: string, data: Object = {}, table: NgxNativeTableComponent = undefined): Observable<TableModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (table) {this.appendAdditionFormData({...data}, table.config);}
    return this.http.post<TableModel>(url, JSON.stringify(data), httpOptions);
  }
  removeData(data, table: NgxNativeTableComponent): void {
    const dataArray = [];
    const combinedObsArray = [];
    if (isArray(data)) {
      dataArray.push(...data);
    } else {
      dataArray.push(data);
    }
    dataArray.forEach((row, i) => {
      combinedObsArray.push(
        timer(i * 100).pipe(
          switchMap(res => {
            const body = {
              kv: {
                id: row.id
              }
            };
           return this.postTableData(table.config.deleteApi, body, table);
          })
        )
      );
    });
    combineLatest(...combinedObsArray).subscribe(res => {
      table.getTableData();
      console.log('removing --', dataArray);
    });
  }
}
