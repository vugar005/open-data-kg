import { Action } from '@ngrx/store';
import { User } from '../models/user.model.';

export enum AuthActionTypes {
  SET_TOKEN = '[Auth] SET_TOKEN',
  SET_USER = '[AUTH] SET_USER',
  AUTO_SET_TOKEN = '[AUTO] SET_TOKEN',
  AUTO_SET_USER = '[AUTO] SET_USER',
  TRY_LOGIN = '[AUTH] TRY_LOGIN Effect',
  LOGIN = '[AUTH] LOGIN',
  TRY_REGISTER = '[AUTH] TRY_REGISTER',
  LOGIN_FAIL = '[AUTH] LOGIN_FAIL',
  SET_API_URL = '[APP CO] SET_API_URL'
}

export class SetToken implements Action {
  readonly type = AuthActionTypes.SET_TOKEN;
  constructor(public payload: {jwtToken: string, decoded: string}) {}
}
export class SetUser implements Action {
  readonly type = AuthActionTypes.SET_USER;
  constructor(public payload: User) {}
}
export class AutoSetToken implements Action {
  readonly type = AuthActionTypes.AUTO_SET_TOKEN;
  constructor(public payload: {jwtToken: string, decoded: string}) {}
}
export class AutoSetUser implements Action {
  readonly type = AuthActionTypes.AUTO_SET_USER;
  constructor(public payload: User) {}
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
  constructor(public payload: Object) {}
}
export class LoginFail implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;
  constructor(public payload: string) {}
}
export class SetApiUrl implements Action {
  readonly type = AuthActionTypes.SET_API_URL;
  constructor(public payload: string) {}
}

export type AuthActions = SetToken |
TryLogin |
Login |
TryRegister |
SetUser |
AutoSetToken |
AutoSetUser |
LoginFail |
SetApiUrl
;
