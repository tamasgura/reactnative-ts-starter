import { fromJS } from 'immutable';
import { createReducer } from '../utility/createReducer';

import { SET_JSON_PLACEHOLDER } from '../actions';

interface IState {
  value: string;
}

const initialState = fromJS({
  value: '',
});

export const JSONPlaceholderReducer = createReducer(initialState, {
  [SET_JSON_PLACEHOLDER](state: IState, action: any) {
    return fromJS(action.value);
  },
});
