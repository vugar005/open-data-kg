import { Dataset } from 'src/app/datasets/models/dataset.model';
import { DatasetsActionTypes, DatasetActions } from './dataset.actions';


export interface DatasetState {
  favoriteDatasets: Dataset[];
}

export const initialState: DatasetState = {
  favoriteDatasets: []
};

export function reducer(state = initialState, action: DatasetActions): DatasetState {
  switch (action.type) {
  case DatasetsActionTypes.SET_FAVOURITE_DATEASETS:
  return {
    ...state,
    favoriteDatasets: action.payload
  };
    default:
      return state;
  }
}
