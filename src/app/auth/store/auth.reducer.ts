import { AuthActionTypes, AuthActions } from './auth.actions';
import { User, UserModuleOperation, UserModule } from '../models/user.model.';


export interface AuthState {
 token: string;
 raw_token: string;
 user: User;
 api_url: string;
 modules: UserModule[];
 priviliges: {[index: string]: UserModuleOperation[]};
}

export const initialState: AuthState = {
 token: '',
 raw_token: '',
 user: null,
 api_url: '',
 modules: null,
 priviliges: {}
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
    case AuthActionTypes.SET_MODULES:
    return {
     ...state,
     modules: action.payload && action.payload.modules
    };
    case AuthActionTypes.SET_PRIVILIGES:
     const priviliges = parseOperations(action.payload);
    return {
      ...state,
      priviliges: priviliges
    };
    case AuthActionTypes.LOG_OUT:
    return {
      ...state,
      token: '',
      raw_token: '',
      user: null,
      modules: null,
      priviliges: {}
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
    case 'DTST':
    return 'datasets';
    case 'DTSTCMMNT':
    return 'comments';
    case 'SHRNGCMMNT':
    return 'sharing-comments';
    case 'NWS':
    return 'news';
    case 'BLG':
    return 'blogs';
    case 'ANNCMNT':
    return 'annoucements';
    case 'FLMNGR':
    return 'file-manager';
    default :
    return '';
  }
}

function parseOperations(user: User): {[index: string]: UserModuleOperation[]}  {
  const priviliges: {[index: string]: UserModuleOperation[]} = {};
     if (user && user.modules) {
      user.modules.forEach(mod => {
        const id = mod.id.toString();
        priviliges[id] = mod.operations;
      });
     }
     return priviliges;
}
