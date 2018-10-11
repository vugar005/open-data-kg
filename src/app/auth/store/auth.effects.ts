import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {tap} from 'rxjs/operators';
import { AuthActionTypes, TryLogin } from './auth.actions';
@Injectable()
export class AuthEffects {

  @Effect({dispatch: false})
    TryLogin = this.actions$.
    pipe(
      ofType(AuthActionTypes.TRY_LOGIN),
      tap(res => console.log(res))
    );
  constructor(private actions$: Actions) {}
}
