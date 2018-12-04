import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { SelectType } from './models/select-type.model';
import { map, tap, shareReplay, share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable()
export class SharedService {
  toastRunning: boolean;
  toggleHeader = new Subject();
  constructor(
    public iziToast: Ng2IzitoastService,
    private jwtService: JwtHelperService,
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
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
  console.log('called')
  console.log(document.querySelectorAll('img.svg'));
 Array.from( document.querySelectorAll('img.svg')).forEach(function(img: any) {
   const imgID = img.id;
   const imgClass = img.className;
   const imgURL = img.src;
   console.log(img.src)
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

}
