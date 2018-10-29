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
export const getUserModules = createSelector(
  selectAuthState,
  auth => auth.user.modules
);
export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user
);
