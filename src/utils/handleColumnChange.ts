import { Bonuses, Score } from '../interfaces';
import _merge from 'lodash/merge';

export const handleColumnChange = (columns: number, savedScore: Score | Bonuses, newScore: Score | Bonuses): Score | Bonuses => {
  const previousNumberOfColumns = Number(localStorage.getItem('previousNumberOfColumns') || columns);

  return columns >= previousNumberOfColumns ? _merge(newScore, savedScore) : { ...newScore };
}
