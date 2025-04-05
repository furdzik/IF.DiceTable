import _maxBy from 'lodash/maxBy';
import _orderBy from 'lodash/orderBy';

import { Options, Stats, StatsValues, SumPlayers } from 'interfaces';
import { NUMBER_OF_ROWS } from 'constant';

export const getCurrentPlayer = (rounds: StatsValues[], startingPlayer: number, currentRound: number, roundsPerPlayer: number) => {
  const playedRound = rounds.filter((el) => el.round === currentRound);
  const notPlayedRound = rounds.filter((el) => el.round < currentRound);

  if (currentRound === 0 || notPlayedRound.length === 0) {
    return startingPlayer;
  }

  const played = playedRound.filter((el) => el.round === currentRound && el.round % roundsPerPlayer === 0);
  const playedIds = played.map((el) => el.player);
  const notPlayed = rounds.filter((el) => playedIds.indexOf(el.player) === -1);

  const currentPlayer = notPlayed.filter((el) => el.round !== currentRound - roundsPerPlayer)[0];
  const nextPlayer = notPlayed.filter((el) => el.round === currentRound - roundsPerPlayer)[0];

  return currentPlayer?.player || nextPlayer?.player;
}

export const getStats = (options: Options, sum: SumPlayers): Stats => {
  const sums: StatsValues[] = [];
  const rounds: StatsValues[] = [];
  const WINNER_INDEX = 0;

  const startingPlayer = options.players?.filter((el) => el.startingPlayer === true)?.[0]?.id;

  options.players?.forEach((player) => {
    rounds.push({ player: player.id, round: sum?.[`player${player.id}`]?.round } as StatsValues);
  });

  const currentRound = _maxBy(rounds, 'round');

  const currentPlayer = getCurrentPlayer(
    rounds,
    startingPlayer,
    currentRound?.round || 0 as number,
    options.roundsPerPlayer
  );

  options.players?.forEach((player) => {
    sums.push({
      player: player.id,
      sum: sum?.[`player${player.id}`]?.all
    });
    rounds.push({ player: player.id, round: sum?.[`player${player.id}`]?.round } as StatsValues);
  });

  const maxSum: StatsValues[] = _orderBy(sums, 'sum', 'desc');
  const maxDifferenceWinnerSum = maxSum[WINNER_INDEX]?.sum;

  const restWinners = maxSum
    .slice(1, maxSum.length);
  const difference = _orderBy(restWinners, 'id')
    .map((el: StatsValues ) => {
      const playerName: string | undefined = options.players?.filter((player) => player.id === el.player)[0]?.name;
      return `${playerName} - ${maxDifferenceWinnerSum - el.sum} ptk`;
    });

  const winners = maxSum
    .map((winner) => options.players?.filter((player) => player.id === winner.player)[0]?.name);

  const winner = options.players?.filter((player) => player.id === maxSum[0].player)[0];

  return {
    currentPlayer,
    currentRound: currentRound?.round || 0,
    currentWinner: 1,
    difference,
    numberOfRounds: NUMBER_OF_ROWS * options.columns,
    winners: winners,
    winner
  }
};
