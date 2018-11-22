import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { SelectType } from './models/select-type.model';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Dataset } from './models/dataset.model';
import { DatasetApi } from './models/datasetApi.model';

@Injectable()
export class SharedService {
  toastRunning: boolean;
  constructor(public iziToast: Ng2IzitoastService, private jwtService: JwtHelperService, private http: HttpClient) {}
  createNotification(type: string, message: string, position = 'bottomRight') {
    this.clearOldToats();
    switch (type) {
      case 'error':
      this.createErrorNotification(message, position);
      break;
      case 'warning':
      this.createWarnNotification(message, position);
      break;
    }
}
createErrorNotification(message: string, position) {
  this.iziToast.show({
    title: 'Error',
    class: 'foo',
    color: 'red',
    timeout: 3000,
    message: message,
    icon: 'fas fa-exclamation-circle',
    progressBarColor: '#9D787A',
    close: false,
    position: position
});
}
createWarnNotification(message: string, position) {
  this.iziToast.show({
    title: 'Warning',
    class: 'foo',
    color: '#FACBA0',
    timeout: 3000,
    message: message,
    icon: 'fas fa-exclamation',
    progressBarColor: '#9D787A',
    transitionOut: 'flipOutX',
    close: false,
    position: position
});
}
clearOldToats() {
  const toasts = document.getElementsByClassName('foo');
   Array.from(toasts).forEach((toast: HTMLElement) => toast.style.display = 'none');
}
canAutoLogin() {
  try {
    const jwtToken = localStorage.getItem('kg-token');
    const user = JSON.parse(localStorage.getItem('kg-user'));
    if (!(jwtToken && user)) {
        return;
    }
    const isExpired = this.jwtService.isTokenExpired(jwtToken);
  //  if (isExpired) {return; }
    const decoded = this.jwtService.decodeToken(jwtToken);
    if (!decoded) {return; }
   // this.store.dispatch(new SetToken({jwtToken, decoded}));
   // this.store.dispatch(new SetUser(user));
   } catch (er) {
     console.log(er);
   }
}
getModTypes(url: string): Observable<SelectType[]> {
  return this.http.post(url, {kv: {}})
  .pipe(
    map((res: any) =>  {
      if (!(res && res.tbl[0])) {return; }
      return res.tbl[0].r.map( row => this.mapModType(row));
    })
  );
}
private  mapModType(res): SelectType {
   return {
      value: res.id,
      label: res.nameEn,
   };
}


getTypesByParentId(typeId: string, parentId: string): Observable<SelectType[]> {
  const body = {
    kv: {
     dicTypeId: typeId,
     parentId: parentId
    }
  };
  return this.http.post(`api/post/Permission/Dictionaries/GetDictionaryList`,
   JSON.stringify(body) )
  .pipe(
    map((res: any) =>  {
      if (!(res && res.tbl[0]) && res.tbl[0].r) {return; }
      return res.tbl[0].r.map( row => this.mapType(row));
    })
  );
}
getTypes(id: string): Observable<SelectType[]> {
  const body = {
    kv: {
     dicTypeId: id
    }
  };
  return this.http.post(`api/get/Permission/Dictionaries/GetDictionaryList`,
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
getDatasetById(id: string): Observable<Dataset> {
  const body = {
    kv: {
    id: id,
    }
  };
  return this.http.post<Dataset>(`api/get/Permission/Datasets/GetDatasetDetails`,
   JSON.stringify(body))
  .pipe(
    tap(res => console.log(res)));
}
getApiByDatasetById(id: string): Observable<DatasetApi[]> {
  const body = {
    kv: {
   datasetId: id,
    }
  };
  return this.http.post<DatasetApi[]>(`api/get/Permission/Datasets/GetApiByDatasetId`,
   JSON.stringify(body))
  .pipe(
    map((res: any) => {
     if (res && res.tbl && res.tbl[0]) {
       return res.tbl[0].r;
     }
    }));
}
}
