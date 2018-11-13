import { Injectable } from '@angular/core';

import {  Router, CanLoad, CanActivate } from '@angular/router';

import { Observable, of } from 'rxjs';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { getUserType, getToken } from './store/auth.selectors';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.store.select(getToken)
    .pipe(
      take(1),
      map(token => {
        console.log(token);
        if (token) {
          return true;
        }
        this.router.navigateByUrl('/');
        return false;
      })
    );
  }
  canActivateChildren(): Observable<boolean> {
    return this.canActivate();
  }
}
