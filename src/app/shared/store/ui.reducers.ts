import { UIActionTypes, UIActions } from './ui.actions';

export interface UIState {
  test: string;
}
const initialState: UIState = {
  test: ''
};
export function reducer(state = initialState, action: UIActions) {

}

