import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {tap, switchMap, map, catchError} from 'rxjs/operators';
import { AuthActionTypes, TryLogin } from './auth.actions';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable()
export class AuthEffects {

  @Effect({dispatch: false})
    TryLogin = this.actions$
    .pipe(
      ofType(AuthActionTypes.TRY_LOGIN),
      tap(res => console.log(res)),
      switchMap((res: any) => this.http.post('http://192.168.1.117:8080/DispatcherRest/login', res.payload)),
      map((res) => {

      }),
    );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
