import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SET_TOKEN = '[Auth] SET_TOKEN',
  SET_USER = '[AUTH] SET_USER',
  TRY_LOGIN = '[AUTH] TRY_LOGIN Effect',
  LOGIN = '[AUTH] LOGIN',
  TRY_REGISTER = '[AUTH] TRY_REGISTER',
}

export class SetToken implements Action {
  readonly type = AuthActionTypes.SET_TOKEN;
  constructor(public payload: {jwtToken: string, decoded: string}) {}
}
export class SetUser implements Action {
  readonly type = AuthActionTypes.SET_USER;
  constructor(public payload: any) {}
}
export class TryLogin implements Action {
  readonly type = AuthActionTypes.TRY_LOGIN;
  constructor(public payload: {username: string, password: string}) {}
}
export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
}
export class TryRegister implements Action {
  readonly type = AuthActionTypes.TRY_REGISTER;
}


export type AuthActions = SetToken | TryLogin | Login | TryRegister | SetUser;
