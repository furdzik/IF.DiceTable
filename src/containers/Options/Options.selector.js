import { createSelector } from 'reselect';

const optionsSelector = (store) => store.Options;

export default createSelector(
  optionsSelector,
  (options) => ({
    ...options
  })
);
