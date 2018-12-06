import {Action} from '@ngrx/store';
export enum UIActionTypes {
  SET_APP_LANGUAGE = '[LANG NAV] SET_APP_LANGUAGE'
}
export class SetAppLanguage {
  readonly type = UIActionTypes.SET_APP_LANGUAGE;
  constructor(public payload: string) {}
}


export type UIActions = SetAppLanguage;
