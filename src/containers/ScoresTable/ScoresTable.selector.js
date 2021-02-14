import { createSelector } from 'reselect';

const scoresSelector = (store) => store.Scores;

export default createSelector(
  scoresSelector,
  (scores) => ({
    ...scores
  })
);
