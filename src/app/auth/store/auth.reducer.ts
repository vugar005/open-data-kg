import { AuthActionTypes, AuthActions } from './auth.actions';


export interface AuthState {
 token: string;
}

export const initialState: AuthState = {
 token: ''
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.SET_TOKEN:
    return {
      ...state,
      token: action.payload
    };
    default:
      return state;
  }
}
