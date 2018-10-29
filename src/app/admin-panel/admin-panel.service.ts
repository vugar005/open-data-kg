import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
   name: data.nameEn.toLowerCase()
 };
}
}
