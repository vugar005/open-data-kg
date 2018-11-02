import {UIState} from './ui.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getUiState = createFeatureSelector<UIState>('ui');
