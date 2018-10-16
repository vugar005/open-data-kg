import {Action} from '@ngrx/store';
export enum UIActionTypes {
 CHANGE_HEADER_CLASS = '[AUTH] CHANGE_HEADER_CLASS',
 CHANGE_GLOBAL_NAV_CLASS = 'CHANGE_GLOBAL_NAV_CLASS'
}
export class ChangeHeaderClass implements Action {
  readonly  type = UIActionTypes.CHANGE_HEADER_CLASS;
  constructor(public payload: string) {}
}
export class ChangeGlobalNavClass implements Action {
  readonly type = UIActionTypes.CHANGE_GLOBAL_NAV_CLASS;
  constructor(public payload: string) {}
}

export type UIActions= ChangeHeaderClass | ChangeGlobalNavClass;
