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
    const user: any = Object.assign({}, action.payload);
    user.modules = user.modules.map(mod => {
      return {
        ...mod,
        url: getUrl(mod)
      };
    });
    return {
      ...state,
     user: user
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

function getUrl(mod) {
  switch (mod.code) {
    case 'USR':
    return 'users';
    case 'APP':
    return 'applications';
    case 'MOD':
    return 'modules';
    case 'OPR':
    return 'operations';
    case 'USRGRP':
    return 'user-roles';
    case 'DIC':
    return 'dictionaries';
    case 'DICTYP':
    return 'dictionary-types';
    case 'ORG':
    return 'organizations';
    default :
    return '';
  }
}
