import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { UserInsertDialogComponent } from './user-insert-dialog/user-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'ent-users',
  templateUrl: './ent-users.component.html',
  styleUrls: ['./ent-users.component.scss']
})
export class EntUsersComponent  {
  @ViewChild('table') table: NtTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Users/GetUserList',
    insertApi: 'api/post/Permission/Users/InsertNewUser',
    updateApi: 'api/post/Permission/Users/UpdateUser',
    deleteApi: 'api/post/Permission/Users/DeleteUser'
  };
  constructor(private dialog: MatDialog, private http: HttpClient) { }
  initDialog(table: NtTableComponent, row = null) {
    const ref = this.dialog.open(UserInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }
  onOptClick(e) {
   if (e.attribute === 'active') {
     const body = {
       kv: {
         id: e.row.id
       }
     };
    this.http.post('api/post/Permission/Users/ActiveUser', JSON.stringify(body)).subscribe();
   } else if (e.attribute === 'deactive') {
    const body = {
      kv: {
        id: e.row.id
      }
    };
   this.http.post('api/post/Permission/Users/DeactiveUser', JSON.stringify(body)).subscribe();
   }
  }
}
