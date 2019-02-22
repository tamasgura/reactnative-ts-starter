// @ts-ignore
// tslint:disable
import { createSelector } from 'reselect'

export const counterSelector = createSelector(
  (state: any) => state.counter,
  (counter: any) => counter.get('value')
)
