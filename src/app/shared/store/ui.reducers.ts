import { UIActionTypes, UIActions } from './ui.actions';

export interface UIState {
  app_language: string;
  header_popup_state: boolean;
}
const initialState: UIState = {
  app_language: '',
  header_popup_state: false
};
export function reducer(state = initialState, action: UIActions) {
  switch (action.type) {
   case UIActionTypes.SET_APP_LANGUAGE:
   return {
     ...state,
     app_language: action.payload
   };
   case UIActionTypes.SET_HEADER_POPUP_STATE:
   return {
     ...state,
     header_popup_state: action.payload
   };
   default:
   return state;
  }
}

