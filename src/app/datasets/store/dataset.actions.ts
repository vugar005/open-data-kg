import { Dataset } from './../models/dataset.model';
import { Action } from '@ngrx/store';

export enum DatasetsActionTypes {
  LOAD_FAVOURITE_DATASETS = '[User Profile Co] Load Favorite Datasets',
  SET_FAVOURITE_DATEASETS = '[User Profile Co] Set Favorite Datasets'
}

export class LoadFavoriteDatasets implements Action {
  readonly type = DatasetsActionTypes.LOAD_FAVOURITE_DATASETS;
}
export class SetFavpriteDatasets implements Action {
  readonly type = DatasetsActionTypes.SET_FAVOURITE_DATEASETS;
  constructor(public payload: Dataset[]) {}
}

export type DatasetActions = LoadFavoriteDatasets | SetFavpriteDatasets;
