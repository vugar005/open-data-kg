import { AuthActionTypes, AuthActions } from './auth.actions';


export interface AuthState {
 token: string;
 raw_token: string;
 user: any;
}

export const initialState: AuthState = {
 token: '',
 raw_token: '',
 user: null
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.SET_TOKEN:
    return {
      ...state,
      token: action.payload.decoded,
      raw_token: action.payload.jwtToken
    };
    case AuthActionTypes.AUTO_SET_USER:
    case AuthActionTypes.SET_USER:
    return {
      ...state,
     user: action.payload
    };
    case AuthActionTypes.AUTO_SET_TOKEN:
    return {
      ...state,
      token: action.payload.decoded,
      raw_token: action.payload.jwtToken
    };
    case AuthActionTypes.LOGIN:
    return {
      ...state,

    };
    default:
      return state;
  }
}
