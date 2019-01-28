import { Injectable } from '@angular/core';

import {  Router, CanLoad, CanActivate } from '@angular/router';

import { Observable, of } from 'rxjs';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { getUserType, getToken, getUser, isAdmin } from './store/auth.selectors';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.store.select(isAdmin)
    .pipe(
      take(1),
      map(admin => {
        console.log(admin);
        if (admin) {
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
