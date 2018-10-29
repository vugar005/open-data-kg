import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SharedAdminService {
  constructor(private http: HttpClient) {}
  getAppList(url: string) {
    return this.http.post(url, {kv: {}})
    .pipe(
      map((res: any) =>  {
        if (!(res && res.tbl[0])) {return; }
        return res.tbl[0].r.map( row => this.mapApps(row))
      })
    );
  }
 private  mapApps(res) {
     return {
       id: res.id,
        name: res.shortNameEn,
     };
  }
}
