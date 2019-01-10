import { AppState } from 'src/app/reducers';
import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { SelectType } from './models/select-type.model';
import { map, take, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BreadCrumb } from './models/breadcrumb.model';
import { TableModel } from './models/table.model';
import { Store } from '@ngrx/store';
import { getApiUrl } from '../auth/store/auth.selectors';
import { getHostname } from '../app.utils';
@Injectable()
export class SharedService {
  toastRunning: boolean;
  toggleHeader = new Subject();
  hostname: string;
  constructor(
    public iziToast: Ng2IzitoastService,
    private jwtService: JwtHelperService,
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private store: Store<AppState>
  ) {
    // this.store.select(getApiUrl).pipe(take(1)).subscribe(res => {
    //   this.hostname = res;
    //   console.log(res)
    // });
    this.hostname = getHostname();
  }
  createNotification(type: string, message: string, position = 'bottomRight') {
    this.clearOldToats();
    switch (type.toLowerCase()) {
      case 'sucess':
      this.createSucessNotification(message, position);
      break;
      case 'error':
        this.createErrorNotification(message, position);
        break;
      case 'warning':
        this.createWarnNotification(message, position);
        break;
    }
  }
  createSucessNotification(message: string, position) {
    this.iziToast.success({
      title: 'Sucess',
      class: 'foo',
      color: 'green',
      timeout: 3000,
      message: message,
      icon: 'fas fa-exclamation-circle',
      close: false,
      position: position
    });
  }
  createErrorNotification(message: string, position) {
    this.iziToast.error({
      title: 'Error',
      class: 'foo',
      timeout: 3000,
      message: message,
      icon: 'fas fa-exclamation-circle',
      close: false,
      position: position
    });
  }
  createWarnNotification(message: string, position) {
    this.iziToast.warning({
      title: 'Warning',
      class: 'foo',
      timeout: 3000,
      message: message,
      icon: 'fas fa-exclamation',
      transitionOut: 'flipOutX',
      close: false,
      position: position
    });
  }
  clearOldToats() {
    const toasts = document.getElementsByClassName('foo');
    Array.from(toasts).forEach(
      (toast: HTMLElement) => (toast.style.display = 'none')
    );
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
      if (!decoded) {
        return;
      }
      // this.store.dispatch(new SetToken({jwtToken, decoded}));
      // this.store.dispatch(new SetUser(user));
    } catch (er) {
      console.log(er);
    }
  }
  getModTypes(url: string): Observable<SelectType[]> {
    return this.http.post(url, { kv: {} }).pipe(
      map((res: any) => {
        if (!(res && res.tbl[0])) {
          return;
        }
        return res.tbl[0].r.map(row => this.mapModType(row));
      })
    );
  }
  private mapModType(res): SelectType {
    return {
      value: res.id,
      label: res.nameEn
    };
  }

  getTypesByParentId(
    typeId: string,
    parentId: string
  ): Observable<SelectType[]> {
    const body = {
      kv: {
        dicTypeId: typeId,
        parentId: parentId
      }
    };
    return this.http
      .post(
        `api/post/Permission/Dictionaries/GetDictionaryList`,
        JSON.stringify(body)
      )
      .pipe(
        map((res: any) => {
          if (!(res && res.tbl[0]) && res.tbl[0].r) {
            return;
          }
          return res.tbl[0].r.map(row => this.mapType(row));
        })
      );
  }
  getTypes(id: string, type= 'Common', method = 'get'): Observable<SelectType[]> {
    const body = {
      kv: {
        dicTypeId: id
      }
    };
    return this.http
      .post(
        `api/${method}/Permission/Dictionaries/GetDictionaryListByType${type}`,
        JSON.stringify(body)
      )
      .pipe(
        map((res: any) => {
          if (!(res && res.tbl[0])) {
            return;
          }
          return res.tbl[0].r.map(row => this.mapType(row));
        })
      );
  }
  private mapType(res): SelectType {
    return {
      value: res.id,
      label: res.nameEn
    };
  }

addCustomMaterialIcon(name: string, url: string) {
  this.matIconRegistry.addSvgIcon(
    name,
    this.domSanitizer.bypassSecurityTrustResourceUrl(`${url}`)
  );
}
replaceSvgWitInline() {
 Array.from( document.querySelectorAll('img.svg')).forEach(function(img: any) {
   const imgID = img.id;
   const imgClass = img.className;
   const imgURL = img.src;
    fetch(imgURL).then(function(response) {
        return response.text();
    }).then(function(text) {

       const parser = new DOMParser();
       const xmlDoc = parser.parseFromString(text, 'text/xml');

        // Get the SVG tag, ignore the rest
       const svg = xmlDoc.getElementsByTagName('svg')[0];

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            svg.setAttribute('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            svg.setAttribute('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        svg.removeAttribute('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if (!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
            svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
        }

        // Replace image with new SVG
        img.parentNode.replaceChild(svg, img);

    });

});
}
buildBreadCrumb(route: ActivatedRoute, url: string = '',
                breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    // If no routeConfig is avalailable we are on the root path
    const label = route.routeConfig ? route.routeConfig.data[ 'breadcrumb' ] : 'Home';
    const path = route.routeConfig ? route.routeConfig.path : '';
    // In the routeConfig the complete path is not available,
    // so we rebuild it each time
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
        label: label,
        url: nextUrl
    };
    const newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];
    if (route.firstChild) {
        // there will be more children to look after, to build our breadcumb
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
   // console.log(newBreadcrumbs)
    return newBreadcrumbs;
}
 getCurentLocale(): string {
  return localStorage.getItem('kg-language') || 'en';
}
getTableData(url: string, kv: Object = {}): Observable<any> {
  return this.http.post<TableModel>(url, JSON.stringify(kv)).pipe(
    map(res => res && res.tbl && res.tbl[0] && res.tbl[0].r),
    map(res => this.mapFileId(res)));
}
private mapFileId(res: any) {
 return res.map(data => {
    if (data.fileId) {
      return {
        ...data,
        fileId: `${this.hostname}/api/get/file/${data.fileId}`
      };
    }
    return data;
  });
}

}
