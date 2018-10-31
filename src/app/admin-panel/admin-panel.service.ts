import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { PageQuery } from 'nt-table/lib/pageQuery.model';

@Injectable()
export class AdminPanelService {
 modules = [];

constructor(private http: HttpClient) { }
 getModuleList(): Observable<any> {
   return this.http.post('http://192.168.1.23:8080/DispatcherRest/api/post/Permission/Modules/GetModuleList', {kv: {}})
   .pipe(
     map((res: any) => {
        if (!(res && res.tbl[0])) {return; }
        const data = res.tbl[0].r;
        return data.map((row) => this.mapModule(row))
     }, ),
     tap(res => this.modules = res)
   );
 }
private mapModule(data) {
 return {
   id: data.id,
   name: data.nameEn.toLowerCase(),
   active: data.active
 };
}
getTableData(roleId, getApi): Observable<any> {
  const body = {
    kv: {
    userRoleId: roleId }
    };
    return  this.http.post(getApi, JSON.stringify(body));

  }
  insertPriviligeList(body) {
    return this.http.post('http://192.168.1.23:8080/DispatcherRest/api/post/Permission/UserRoles/InsertUserRolePrivilege',
    JSON.stringify(body))
    .pipe(
    );
  }

}
