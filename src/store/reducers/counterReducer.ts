import { fromJS } from 'immutable';
import { createReducer } from '../utility/createReducer';

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions';

interface IState {
  value: number;
}

const initialState: IState = fromJS({
  value: 0,
});

export const counterReducer = createReducer(initialState, {
  [INCREMENT_COUNTER](state: IState, action: any) {
    return fromJS({ value: state.toJS().value + action.amount });
  },
  [DECREMENT_COUNTER](state: IState, action: any) {
    return fromJS({ value: state.toJS().value - action.amount });
  },
});
