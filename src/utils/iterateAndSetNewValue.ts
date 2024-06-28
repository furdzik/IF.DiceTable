import { figureScore } from 'constant';

const getCorrectValue = (key: string, value: unknown, columns: number) => {
  if (value === null) {
    return value;
  }
  const newValues = [];
  for (let i = 1; i <= columns; i++) {
    newValues.push(key === 'columnAllResults' || key === 'sum' ? null : { ...figureScore, columnId: i });
  }

  return newValues;
};

export const iterateAndSetNewValue = (obj: any, columns: number) => {
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      iterateAndSetNewValue(value, columns);
    } else {
      obj[key] = getCorrectValue(key, value, columns);
    }
  });
};