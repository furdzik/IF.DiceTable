import _maxBy from 'lodash/maxBy';
import _orderBy from 'lodash/orderBy';

import { Options, Stats, StatsValues, SumPlayers } from 'interfaces';
import { NUMBER_OF_ROWS } from 'constant';

const chooseSum = (all: number, allSumWithoutSchool: number, currentRound: number, columns: number) => currentRound < NUMBER_OF_ROWS * columns ? allSumWithoutSchool : all;

export const getStats = (options: Options, sum: SumPlayers): Stats => {
  const sums: StatsValues[] = [];
  const rounds: StatsValues[] = [];
  const WINNER_INDEX = 0;

  options.players?.forEach((player) => {
    rounds.push({ player: player.id, round: sum?.[`player${player.id}`]?.round });
  });

  const currentRound =_maxBy(rounds, 'round');

  options.players?.forEach((player) => {
    sums.push({ player: player.id, sum: chooseSum(sum?.[`player${player.id}`]?.all, sum?.[`player${player.id}`]?.allSumWithoutSchool, currentRound?.round || 0, options.columns) });
    rounds.push({ player: player.id, round: sum?.[`player${player.id}`]?.round });
  });

  const maxSum = _orderBy(sums, 'sum', 'desc');
  const maxDifferenceWinnerSum = maxSum[WINNER_INDEX]?.sum;

  const restWinners = maxSum
    .slice(1, maxSum.length);
  const difference = _orderBy(restWinners, 'id')
    .map((el) => {
      const playerName = options.players?.filter((player) => player.id === el.player)[0]?.name;
      return `${playerName} - ${maxDifferenceWinnerSum - el.sum} ptk`;
    });

  const winners = maxSum
    .map((winner) => options.players?.filter((player) => player.id === winner.player)[0]?.name);

  return {
    currentRound: currentRound?.round || 0,
    currentWinner: 1,
    difference,
    numberOfRounds: NUMBER_OF_ROWS * options.columns,
    winners
  }
};
