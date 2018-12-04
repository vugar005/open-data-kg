import { Injectable } from '@angular/core';
import { Dataset } from './models/dataset.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DatasetApi } from './models/datasetApi.model';
import { map } from 'rxjs/operators';
import { Category } from './models/category.model';
import { CategoryQuery } from './models/category-query.model';
import { DatasetByCategoryGroupByOrg } from '../shared/models/DatasetByCategoryGroupByOrg.model';
import { OrgQuery } from './models/orgQuery.model';
import { TableModel } from '../shared/models/table.model';
import { Organization } from './models/organization.model';

@Injectable({
  providedIn: 'root'
})
export class DatasetsService {

constructor(private http: HttpClient) { }
getDatasetById(id: string): Observable<Dataset> {
  const body = {
    kv: {
      id: id
    }
  };
  return this.http
    .post<Dataset>(
      `api/get/Permission/Datasets/GetDatasetDetails`,
      JSON.stringify(body)
    );
}
getApiByDatasetById(id: string): Observable<DatasetApi[]> {
  const body = {
    kv: {
      datasetId: id
    }
  };
  return this.http.post<DatasetApi[]>(
    `api/get/Permission/Datasets/GetApiByDatasetId`,
    JSON.stringify(body)
  );
  }
  getDatasetByQuery(query: string): Observable<Dataset[]> {
    const body = {
      kv: {
        datasetFullname: query
      }
    };
    return this.http
      .post<Dataset[]>(
        `api/get/Permission/Datasets/GlobalSearchForDataset`,
        JSON.stringify(body)
      ).pipe(
        map((res: any) => {
          if (res && res.tbl && res.tbl[0] && res.tbl[0].r) {
           return res.tbl[0].r;
          }
        })
      );
  }
  getCategories(): Observable<Category[] | null> {
    return this.http.post<TableModel>('api/get/Permission/Datasets/GetDatasetCategoryWithCount', {})
    .pipe(
      map( res => this.extractTableRows(res))
    );
  }
  getDatasetsWithGroupByOrg(query: CategoryQuery): Observable<DatasetByCategoryGroupByOrg> {
    const body = {
      kv: {
        ...query
      }
    };
    return this.http.post<DatasetByCategoryGroupByOrg>('api/get/Permission/Datasets/GetDatasetListByCategoryIdWithGroupByOrg', body);
  }
  getOrganizations(): Observable<Organization[]> {
    return this.http.post<TableModel>('api/get/Permission/Datasets/GetOrganizationWithCategoryCount', {})
    .pipe(
      map( res => this.extractTableRows(res))
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
  private extractTableRows(table: TableModel) {
    if (table && table.tbl && table.tbl[0].r) {
      return table.tbl[0].r;
    } else {
      return null;
    }
  }

}
