import { AutoSetUser } from './../../auth/store/auth.actions';
import { AppState } from './../../reducers/index';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import {take, tap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { getToken, getUser } from 'src/app/auth/store/auth.selectors';
@Injectable()
export class UserResolver {
  constructor(private http: HttpClient, private store: Store<AppState>, private router: Router) {}
  resolve(
    route: ActivatedRoute,
    state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> {
    return this.store.select(getUser)
    .pipe(
      take(1),
      switchMap(user => {
        const token = localStorage.getItem('kg_token');
        if (token && user) {return of(user); }
        if (token && !user) {return  this.http.post('api/post/user/check', {}); }
        return of(null);
      }),
      tap((res: any) => {
        if (!res) { return; }
        const user = res.data;
        if (user) {
          console.log(user);
          this.store.dispatch(new AutoSetUser(user));
        }
      })
      );
    }
}
