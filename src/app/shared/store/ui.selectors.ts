import {UIState} from './ui.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getUiState = createFeatureSelector<UIState>('ui');
export const getAppLanguage = createSelector(
  getUiState,
  ui => ui.app_language
);
export const getHeaderPopupState = createSelector(
  getUiState,
  ui => ui.header_popup_state
);
