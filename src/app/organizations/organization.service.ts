import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../categories/models/category.model';
import { map, tap } from 'rxjs/operators';
import { OrgQuery } from './models/orgQuery.model';
import { DatasetByCategoryGroupByOrg } from '../shared/models/DatasetByCategoryGroupByOrg.model';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(private orgService: OrganizationService, private http: HttpClient) {}
  getOrganizations(): Observable<Category[]> {
    return this.http.post<Category[]>('api/get/Permission/Datasets/GetOrganizationWithCategoryCount', {})
    .pipe(
      map((res: any) => res && res.tbl[0].r ),
    );
  }
  getDatasetsWithGroupByCat(query: OrgQuery): Observable<DatasetByCategoryGroupByOrg> {
    const body = {
      kv: {
        ...query
      }
    };
    return this.http.post<DatasetByCategoryGroupByOrg>('api/get/Permission/Datasets/GetDatasetListByOrgIdWithGroupByCategory', body);
  }

}
