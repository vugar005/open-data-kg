import { AutoSetUser } from './../../auth/store/auth.actions';
import { AppState } from './../../reducers/index';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import {take, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { getToken } from 'src/app/auth/store/auth.selectors';
@Injectable()
export class UserResolver {
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  resolve(
    route: ActivatedRoute,
    state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> {
    return this.store.select(getToken)
    .pipe(
      take(1),
      switchMap(token => {
        if (!token) {return of(null); }
        if (token) {return   this.http.post('api/post/user/check', {}); }
      }),
      tap((res: any) => {
        if (!res) {return; }
        const user = res.data;
        if (user) {
          console.log(user)
          this.store.dispatch(new AutoSetUser(user));
        }
      })
      );
    }
}
