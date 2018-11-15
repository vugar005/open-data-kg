import { Component, OnInit, Input } from '@angular/core';
import { AdminPanelService } from '../../admin-panel.service';
import { GridApi, ColumnApi, GridOptions } from 'ag-grid-community';
import { AgGridColumn } from 'ag-grid-angular';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { CheckboxRendererComponent } from './checkbox-renderer';
import { getUseRoleId } from 'src/app/auth/store/auth.selectors';
import { first, tap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-operations-table',
  templateUrl: './user-operations-table.component.html',
  styleUrls: ['./user-operations-table.component.scss']
})
export class UserOperationsTableComponent implements OnInit {
  @Input() userRoleIdForChange: number;
  userRoleId: number;
  rowData: any;
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: AgGridColumn[] = [];
  neededColumns = [ 'moduleEn', 'operationEn', 'checkbox'];
  frameworkComponents;
  gridOptions;
  constructor(private adminService: AdminPanelService, private store: Store<AppState>) { }

  ngOnInit() {
    this.frameworkComponents = {
      checkboxCo: CheckboxRendererComponent
    };
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this,
        onCheckBoxChange: this.onCheckChange,
      }
    };
  }
  buildRows(data) {
    let rowData = data.tbl[0].r;
    const newRowData = [...rowData].map((row, index) => {
      row.no = index + 1;
      return row;
    });
    rowData = newRowData;
    rowData.forEach(row => row.checked = false);
    this.rowData = rowData;
  }
  buildColumns(data) {
    this.columnDefs = data.tbl[0].c.map((col, index) => {
      return <AgGridColumn>{
        headerName: col.n,
        field: col.i,
        editable: false,
        hide: false
      };
    });
    this.columnDefs.push(<AgGridColumn> {
      headerName: '&nbsp;&nbsp;Checkbox',
      field: 'checkbox',
      editable: false,
      cellStyle: { background: 'white', textAlign: 'center' },
      suppressSorting: true,
      suppressMovable: true,
      cellRenderer: 'checkboxCo',
      suppressMenu: true,
      width: 100,
      pinned: 'right',
    });
    this.columnDefs = this.columnDefs.filter(col => (this.neededColumns.includes(col.field)));
    this.gridApi.setColumnDefs(this.columnDefs);
  }
  geTableData(roleId: number): Observable<any> {
   return this.adminService.getTableData(roleId,
      'api/get/Permission/UserRoles/GetUserRolePrivilege');
  }
  buildTableData(res) {
    if (res && res.tbl[0] && res.tbl[0].c) {
        this.buildColumns(res);
        this.toggleColumns(this.neededColumns);
      this.buildRows(res);
    } else {
      this.gridApi.showNoRowsOverlay();
    }
    }
    toggleColumns(selectedColumns) {
      const columns = this.gridColumnApi.getAllColumns().map(res => res.getColId());
      columns.forEach((col, index) => {
        if ( (!selectedColumns.includes(col)) ) {
          this.changeColumnsVisibility(col, false);
        } else {
          this.changeColumnsVisibility(col, true);
        }
      });
    }
    changeColumnsVisibility(col: string, mode: boolean) {
      this.gridColumnApi.setColumnsVisible([col], mode);
    }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
     this.store.select(getUseRoleId)
     .pipe(
       first(),
       tap(res => this.userRoleId = +res),
       switchMap( res => this.geTableData(this.userRoleId),
       ))
     .subscribe(res => {
      this.buildTableData(res);
      this.getUserPriviliges(this.userRoleIdForChange);
     });
  }
  getUserPriviliges(id: number) {
     this.geTableData(id)
     .subscribe(res => {
      const rowData = res.tbl[0].r;
      const newRowData = [...rowData].map((row, index) => {
        return row.id;
      });
      this.toggleUserPreviliges(newRowData);
     });
  }
  toggleUserPreviliges(rowData) {
     this.rowData.forEach(row => {
       row.checked =  rowData.includes(row.id);
     });
  }
  onCheckChange(event) {
   this.rowData.forEach(row => {
     if (row.id === event.row.id) {
       row.checked = event.checked;
     }
   });
  }
  onSaveOp() {
    const rows = [];
   this.rowData.forEach(row => {
     if (row.checked) {
       rows.push({
        userRoleId: this.userRoleIdForChange,
        operationId: row.id
       });
     }
   });
   const obj = {
     tbl: [
       {
         tn: 'RoleAccess',
         r: rows
       }
     ]
   };
   console.log(obj);
   this.adminService.insertPriviligeList(obj)
   .subscribe(res => console.log(res))
  }
 }
