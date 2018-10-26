import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { getRawToken } from './store/auth.selectors';
import { take } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public store: Store<AppState>) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token$ = this.store.select(getRawToken).pipe(take(1));
    request = request.clone({
      setHeaders: {
        Authorisation: `Token ${token$}`
      }
    });
    return next.handle(request);
  }
}
