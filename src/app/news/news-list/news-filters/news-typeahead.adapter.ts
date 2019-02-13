import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypeAheadAdapter } from 'ngx-simple-typeahead';

export class NewsTypeAheadAdapter extends TypeAheadAdapter {
    constructor(private http: HttpClient) {
      super();
    }
    getResults(query: string): Observable<any> {
      const api = 'api/get/Permission/Sharing/GetNewsForCommon';
      const object = {
        kv: {
          title: query,
          startLimit: 0,
          endLimit: 3
        }
      };
      return this.http.post(api, JSON.stringify(object))
      .pipe(
       map((res: any) => {
         if (res && res.tbl && res.tbl[0] && res.tbl[0].r) {
           return res.tbl[0].r;
         }
         return [];
       })
      );
    }
}
