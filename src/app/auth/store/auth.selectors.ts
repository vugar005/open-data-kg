import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState  = createFeatureSelector<AuthState>('auth');
export const getToken = createSelector(
  selectAuthState,
  auth => auth.token
);
export const getRawToken = createSelector(
  selectAuthState,
  auth => auth.raw_token
);
export const getUser = createSelector(
  selectAuthState,
  auth => auth.user
);
export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user
);

export const getUseRoleId = createSelector(
  selectAuthState,
  auth => auth.user.account.role.id
);
export const getUserOrg = createSelector(
  selectAuthState,
  auth => auth.user.org
);

export const getApiUrl = createSelector(
  selectAuthState,
  auth => auth.api_url
);

export const getUserType = createSelector(
  selectAuthState,
  auth => auth.user && auth.user.userType
);
export const isAdmin = createSelector(
  getUserType,
  type => type === 'ADMIN'
);
export const isSuperAdmin = createSelector(
  getUserType,
  type => type === 'SYSADMIN'
);

export const getUserModules = createSelector(
  selectAuthState,
  auth => auth.user && auth.user.modules
);
