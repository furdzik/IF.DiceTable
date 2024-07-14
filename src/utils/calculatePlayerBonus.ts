import _maxBy from 'lodash/maxBy';

import { Bonuses, BonusesConfig, BonusesPlayers, Player, PlayerCompareValues, Score, SumPlayer } from 'interfaces';
import { THOUSAND_BONUS_VALUE } from 'constant';

export const calculatePlayerBonus = (
  player: Player,
  scores: Score,
  sum: SumPlayer,
  bonuses: BonusesPlayers | null,
  config: BonusesConfig,
  thousandBonusResult: PlayerCompareValues[],
  bonusThousandGranted: boolean
): Bonuses => {
  const playerBonuses = bonuses?.[`player${player.id}`];
  let thousandBonus = playerBonuses?.thousandBonus || 0;

  if (!bonusThousandGranted) {
    const maxValue =_maxBy(thousandBonusResult, 'sum');
    const roundsAreEven = thousandBonusResult.reduce((previousValue, currentValue) => previousValue === currentValue.round ? currentValue.round : 0, thousandBonusResult[0].round);

    if (roundsAreEven && (maxValue?.sum || 0) >= THOUSAND_BONUS_VALUE) {
      thousandBonus = maxValue?.player === player.id ? config.thousandBonus.value as number : 0;
    }
  }

  return {
    ...playerBonuses,
    thousandBonus: thousandBonus
  };
}
