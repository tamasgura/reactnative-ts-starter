import { createSelector } from 'reselect';

export const JSONPlaceholderSelector = createSelector(
  (state: any) => state.JSONPlaceholder,
  (JSONPlaceholder: any) => JSONPlaceholder.get('value')
);
