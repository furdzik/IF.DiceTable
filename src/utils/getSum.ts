import { Sum } from 'interfaces';

export const getSum = (score: Sum[], columns: number) => {
  const sum: number[] = [];
  [...Array(columns).keys()].forEach((columnId) => {
    const columnSum = score
      .filter((el) => el.columnId === columnId + 1)
      .reduce((a, b) => a + Number(b?.value), 0);
    sum.push(columnSum);
  });

  return {
    sum: sum.reduce((a, b) => a + b, 0),
    sumByColumn: sum
  };
};
