import { AuthActionTypes, AuthActions } from './auth.actions';
import { User } from '../models/user.model.';


export interface AuthState {
 token: string;
 raw_token: string;
 user: User;
 api_url: string;
}

export const initialState: AuthState = {
 token: '',
 raw_token: '',
 user: null,
 api_url: ''
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
    if (user.modules) {
      user.modules = user.modules.map(mod => {
        return {
          ...mod,
          url: getUrl(mod)
        };
      });
    }
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
    case AuthActionTypes.SET_API_URL:
    return {
     ...state,
     api_url: action.payload
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
