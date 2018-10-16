import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUi from '../shared/store/ui.reducers';
export interface AppState {
  ui: fromUi.UIState;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
