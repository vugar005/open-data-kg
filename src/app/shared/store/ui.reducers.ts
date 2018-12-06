import { UIActionTypes, UIActions } from './ui.actions';

export interface UIState {
  app_language: string;
}
const initialState: UIState = {
  app_language: ''
};
export function reducer(state = initialState, action: UIActions) {
  switch (action.type) {
   case UIActionTypes.SET_APP_LANGUAGE:
   return {
     ...state,
     app_language: action.payload
   };
   default:
   return state;
  }
}

