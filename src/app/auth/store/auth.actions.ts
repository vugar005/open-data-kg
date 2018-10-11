import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SET_TOKEN = '[Auth] SET_TOKEN',
  TRY_LOGIN = '[AUTH] TRY_LOGIN Effect',
  LOGIN = '[AUTH] LOGIN',
  TRY_REGISTER = '[AUTH] TRY_REGISTER',
}

export class SetToken implements Action {
  readonly type = AuthActionTypes.SET_TOKEN;
  constructor(public payload: string) {}
}
export class TryLogin implements Action {
  readonly type = AuthActionTypes.TRY_LOGIN;
}
export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
}
export class TryRegister implements Action {
  readonly type = AuthActionTypes.TRY_REGISTER;
}


export type AuthActions = SetToken | TryLogin | Login | TryRegister;
