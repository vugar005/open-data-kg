import { UIActionTypes, UIActions } from './ui.actions';

export interface UIState {
  headerClass: string;
  globalNavClass: string;
}
const initialState: UIState = {
  headerClass: '',
  globalNavClass: 'bottom'
};
export function reducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case UIActionTypes.CHANGE_HEADER_CLASS:
      return {
        ...state,
        headerClass: action.payload
      };
      case UIActionTypes.CHANGE_GLOBAL_NAV_CLASS:
      return {
        ...state,
        globalNavClass: action.payload
      };
    default :
      return state;
  }
}

