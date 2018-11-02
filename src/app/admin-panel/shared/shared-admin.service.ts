import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';

@Injectable()
export class SharedAdminService {
  constructor(private http: HttpClient) {}
  getModTypes(url: string) {
    return this.http.post(url, {kv: {}})
    .pipe(
      map((res: any) =>  {
        if (!(res && res.tbl[0])) {return; }
        return res.tbl[0].r.map( row => this.mapModType(row));
      })
    );
  }
 private  mapModType(res) {
     return {
        value: res.id,
        label: res.nameEn,
     };
  }
  getTypes(id: string): Observable<SelectType[]> {
    console.log(id)
    const body = {
      kv: {
       dicTypeId: id
      }
    };
    return this.http.post(`api/post/Permission/Dictionaries/GetDictionaryList`,
     JSON.stringify(body) )
    .pipe(
      map((res: any) =>  {
        if (!(res && res.tbl[0])) {return; }
        return res.tbl[0].r.map( row => this.mapType(row));
      })
    );
  }
 private  mapType(res): SelectType {
     return {
        value: res.id,
        label: res.nameEn,
     };
  }
}
