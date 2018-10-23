import { AuthActionTypes, AuthActions } from './auth.actions';


export interface AuthState {
 token: string;
 user: any;
}

export const initialState: AuthState = {
 token: '',
 user: null
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.SET_TOKEN:
    return {
      ...state,
      token: action.payload.decoded
    };
    case AuthActionTypes.SET_USER:
    return {
      ...state,
     user: action.payload
    };
    case AuthActionTypes.LOGIN:
    return {
      ...state,

    };
    default:
      return state;
  }
}
