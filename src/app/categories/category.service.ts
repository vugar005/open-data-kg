import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './models/category.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DatasetByCategoryGroupByOrg } from '../shared/models/DatasetByCategoryGroupByOrg.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategories(): Observable<Category[]> {
    return this.http.post<Category[]>('api/get/Permission/Datasets/GetDatasetCategoryWithCount', {})
    .pipe(
      map((res: any) => res && res.tbl[0].r )
    );
  }
  getDatasetsWithGroupByOrg(catId: string): Observable<DatasetByCategoryGroupByOrg> {
    const body = {
      kv: {
        categoryId: catId
      }
    };
    return this.http.post<DatasetByCategoryGroupByOrg>('api/get/Permission/Datasets/getDatasetListByCategoryIdWithGroupByOrg', body);
  }

}
