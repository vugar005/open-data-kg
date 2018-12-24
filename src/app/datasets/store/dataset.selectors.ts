import { DatasetState } from './dataset.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectDatasetState  = createFeatureSelector<DatasetState>('dataset');
export const getFavoriteDatasets = createSelector(
  selectDatasetState,
  dataset => dataset.favoriteDatasets
);

