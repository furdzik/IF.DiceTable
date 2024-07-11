import _maxBy from 'lodash/maxBy';
import _orderBy from 'lodash/orderBy';

import { Options, StatsValues, SumPlayers } from 'interfaces';
import { NUMBER_OF_ROWS } from 'constant';

export const getStats = (options: Options, sum: SumPlayers) => {
  const sums: StatsValues[] = [];
  const rounds: StatsValues[] = [];
  const WINNER_INDEX = 0;

  options.players?.forEach((player) => {
    sums.push({ player: player.id, sum: sum?.[`player${player.id}`]?.all });
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

  const currentRound =_maxBy(rounds, 'round');
  const winners = maxSum
    .map((winner) => options.players?.filter((player) => player.id === winner.player)[0]?.name);

  return {
    currentRound: currentRound?.round,
    currentWinner: 1,
    difference,
    numberOfRounds: NUMBER_OF_ROWS * options.columns,
    winners
  }
};
