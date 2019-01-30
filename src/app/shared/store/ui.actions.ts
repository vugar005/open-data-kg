import {Action} from '@ngrx/store';
export enum UIActionTypes {
  SET_APP_LANGUAGE = '[LANG NAV] SET_APP_LANGUAGE',
  SET_HEADER_POPUP_STATE = '[HEADER CO] SET_HEADER_POPUP_STATE'
}
export class SetAppLanguage {
  readonly type = UIActionTypes.SET_APP_LANGUAGE;
  constructor(public payload: string) {}
}
export class SetHeaderPopupState {
  readonly type = UIActionTypes.SET_HEADER_POPUP_STATE;
  constructor(public payload: boolean) {}
}


export type UIActions = SetAppLanguage | SetHeaderPopupState;
