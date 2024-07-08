import { figureScore } from 'constant';
import { ConfigElement, ScoreElement } from '../interfaces';
import _orderBy from 'lodash/orderBy';

export const getCorrectValue = (key: string, value: unknown, { columns }: { columns: number }) => {
  if (value === null) {
    return value;
  }
  const newValues = [];
  for (let i = 1; i <= columns; i++) {
    newValues.push(key === 'columnAllResults' || key === 'sum' ? null : { ...figureScore, columnId: i });
  }

  return newValues;
};

export const updateScoreElement = (key: string, value: ScoreElement[] | null, { score, scoreType }: { score: ScoreElement, scoreType: ConfigElement }): ScoreElement[] | null => {
  if (value === null || key !== scoreType.id) {
    return value;
  }

  const restElements = (value as ScoreElement[]).filter((el) => el.columnId !== score.columnId);

  const newValues = [
    ...restElements,
    score
  ];

  return _orderBy(newValues, ['columnId']);
};

export const getSum = (key: string, value: ScoreElement[] | null): number | null => {
  if (value === null) {
    return value;
  }

  return 2;
};

/* eslint @typescript-eslint/no-explicit-any: 0 */
export const iterateAndSetNewValue = (
  callback: (...args: any[]) => unknown,
  obj: any,
  args?: any
) => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      iterateAndSetNewValue(callback, value, {  ...args });
    } else {
      obj[key] = callback(key, value, {  ...args });
    }
  });
};
