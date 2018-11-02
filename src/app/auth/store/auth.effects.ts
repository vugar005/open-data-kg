import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {tap, switchMap, map, catchError, mergeMap, concat} from 'rxjs/operators';
import { AuthActionTypes, TryLogin } from './auth.actions';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
@Injectable()
export class AuthEffects {

  @Effect()
    tryLogin = this.actions$
    .pipe(
      ofType(AuthActionTypes.TRY_LOGIN),
      switchMap((res: any) =>
       this.http.post('login', res.payload, {
       observe: 'response'})
       ),
       mergeMap((res: HttpResponse<any>) => {
        if (res.body.code === 'ERROR') {
          return [{
            type: AuthActionTypes.LOGIN_FAIL,
            payload: res.body.message['en']
          }];
        }
         const jwtToken = res.headers.get('Authorisation');
         const decoded = this.jwtService.decodeToken(jwtToken);
         return [{
           type: AuthActionTypes.SET_TOKEN,
           payload: {decoded, jwtToken}
         },
         {
          type: AuthActionTypes.SET_USER,
          payload: res.body.data
        }
        ];
       })
    );
    @Effect({dispatch: false})
    setToken = this.actions$
    .pipe(
      ofType(AuthActionTypes.SET_TOKEN),
      tap((res: any) => {
        console.log(1);
        localStorage.setItem('kg-token', res.payload.jwtToken);
      })
    );
    @Effect({dispatch: false})
    setUser = this.actions$
    .pipe(
      ofType(AuthActionTypes.SET_USER),
      tap((res: any) => {
        localStorage.setItem('kg-user', JSON.stringify(res.payload));
       this.router.navigateByUrl('/admin');
      })
    );
    @Effect({dispatch: false})
    loginFail = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGIN_FAIL),
      tap((res: any) => {
        this.sharedService.createNotification('error', res.payload, 'bottomCenter');
      })
    );

  constructor(private actions$: Actions,
     private http: HttpClient ,
     private jwtService: JwtHelperService,
     private router: Router,
     private sharedService: SharedService
     ) {}
}
