import _maxBy from 'lodash/maxBy';

import {
  Bonuses,
  BonusesConfig,
  BonusesPlayers,
  Player,
  PlayerCompareValues,
  Score, ScoreElement,
  SumPlayer
} from 'interfaces';
import {
  FigureId,
  NUMBER_OF_ROWS,
  NUMBER_OF_SECTIONS_FOR_BONUS,
  SCHOOL_BONUS_MIN_VALUE,
  THOUSAND_BONUS_VALUE
} from 'constant';
import { iterateAndGetColumnValuesById, iterateAndGetValuesBySection } from './iterateAndSetNewValue';
import { arrayAllEqual } from './others';

export const calculatePlayerBonus = (
  player: Player,
  scores: Score,
  sum: SumPlayer,
  bonuses: BonusesPlayers | null,
  config: BonusesConfig,
  thousandBonusResult: PlayerCompareValues[],
  bonusThousandGranted: boolean,
  columns: number
): Bonuses => {
  const playerBonuses = bonuses?.[`player${player.id}`];
  let thousandBonus = playerBonuses?.thousandBonus || 0;
  const schoolBonus: number[] = [];

  // the Thousand Bonus
  if (!bonusThousandGranted) {
    const maxValue =_maxBy(thousandBonusResult, 'sum');
    const roundsAreEven = thousandBonusResult.reduce((previousValue, currentValue) => previousValue === currentValue.round ? currentValue.round : 0, thousandBonusResult[0].round);

    if (roundsAreEven && (maxValue?.sum || 0) >= THOUSAND_BONUS_VALUE) {
      thousandBonus = maxValue?.player === player.id ? Number(config?.thousandBonus.value) : 0;
    }
  }

  // The School General
  sum?.school?.forEach((element) => {
    schoolBonus.push((element - SCHOOL_BONUS_MIN_VALUE) * Number(config?.schoolGeneral.value));
  });

  // The Column Bonus
  const columnBonus: number[] = [];
  const columnsValues: ScoreElement[][] = Array.from(Array(columns)).map(() => []);
  const results = iterateAndGetColumnValuesById(scores, columnsValues);

  results?.forEach((column, index: number) => {
    if (column.length === NUMBER_OF_ROWS) {
      const successLength = columnBonus.length + 1;
      columnBonus[index] = Number(successLength) * Number(config?.columnBonus.value as number);
    }
  });

  // Same Value Vice
  const userViceValues = scores?.figures.section2.vice.map((el) => el.dice);
  const sameValueVice = arrayAllEqual(userViceValues) ? Number(config?.sameValueVice.value) : 0;

  // Same Value General
  const userGeneralValues = scores?.figures.section2.general.map((el) => el.dice);
  const sameValueGeneral = arrayAllEqual(userGeneralValues) ? Number(config?.sameValueGeneral.value) : 0;

  // Sections All Results
  const sectionValues = Array.from(Array(NUMBER_OF_SECTIONS_FOR_BONUS)).map(() => []);

  Array.from(Array(NUMBER_OF_SECTIONS_FOR_BONUS)).forEach((el, index) => {
    iterateAndGetValuesBySection(
      scores,
      sectionValues[index],
      config?.[`section${index + 1}AllResults`]?.sectionNames as FigureId[],
      index + 1
    );
  });

  const sectionsBonus: number[] = [];
  sectionValues?.forEach((section, index) => {
    sectionsBonus[index] = section && section?.length === (Number(config?.[`section${index + 1}AllResults`]?.rows) * columns)
      ? Number(config?.[`section${index + 1}AllResults`].value)
      : 0;
  });
  const sectionsBonusSum = sectionsBonus?.reduce((a, b) => a + b, 0);

  // restBonuses
  const restBonuses = sameValueVice + sameValueGeneral + sectionsBonusSum;

  return {
    ...playerBonuses,
    thousandBonus,
    columnBonus,
    schoolGeneral: schoolBonus,
    restBonuses
  };
}
