import _orderBy from 'lodash/orderBy';

import { FigureId, figureScore } from 'constant';
import { Config, ConfigElement, ScoreElement, Sum, X_VALUE } from 'interfaces';

import { calculateScore } from './calculateScore';

function instanceOfScoreElement (object: any): object is ScoreElement {
  return 'columnId' in object;
}

export const getCorrectValue = (key: string, value: unknown, { columns }: { columns: number }) => {
  if (value === null) {
    return value;
  }
  const newValues = [];
  for (let i = 1; i <= columns; i++) {
    newValues.push(key === 'columnAllResults' || key === 'schoolGeneral' ? null : { ...figureScore, columnId: i });
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

export const iterateAndSumValues = (
  obj: any,
  config: Config,
  results: Sum[] = [],
  thousandBonus = 0,
  restBonuses = 0,
  schoolBonus = 0,
  school: Sum[] = [],
  prevKey = ''
): {
  results: Sum[], thousandBonus: number, restBonuses: number, schoolBonus: number, school: Sum[]
} => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (typeof value === 'object' && value !== null && !instanceOfScoreElement(value)) {
      iterateAndSumValues(
        value,
        config,
        results,
        thousandBonus,
        restBonuses,
        schoolBonus,
        school,
        prevKey ? `${prevKey},${key}` : key
      );
    } else {
      if (value !== null && value.throw !== null) {
        const keys = prevKey.split(',');

        const configValue = keys.reduce((acc: any, key) => acc[key], config);
        const sum = calculateScore(value, configValue);

        results.push({ columnId: value.columnId, value: sum === X_VALUE ? 0 : sum });

        if (configValue && (
          configValue.id === FigureId.School1
          || configValue.id === FigureId.School2
          || configValue.id === FigureId.School3
          || configValue.id === FigureId.School4
          || configValue.id === FigureId.School5
          || configValue.id === FigureId.School6
        )) {
          school.push({ columnId: value.columnId, value: sum === X_VALUE ? 0 : sum });
        }
      }
    }
  });

  return { results, thousandBonus, restBonuses, schoolBonus, school };
}
