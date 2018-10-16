import {UIState} from './ui.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getUiState = createFeatureSelector<UIState>('ui');
export const getHeaderClass = createSelector(
  getUiState,
  state => state.headerClass
);
export const getGlobalNavClass = createSelector(
  getUiState,
  state => state.globalNavClass
);
