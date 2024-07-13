import { FigureId, ResultsId } from 'constant';

export enum Throw {
  first = 1,
  second = 2,
  third = 3
}

export type TYP_X = 'X';
export const X_VALUE: TYP_X = 'X';

export interface ElementValue {
  [kay: number]: number;
}

export interface ConfigElement {
  id?: FigureId;
  name: string;
  initialValue?: number;
  value: number | ElementValue;
  resultsId?: ResultsId;
}
export interface ScoreElement {
  columnId: number | null;
  throw: Throw | null;
  dice?: number | null;
  value?: number | null | TYP_X;
  quantity?: number | null;
}

export interface SchoolConfig {
  [kay: number]: ConfigElement;
}

export interface School {
  [kay: number]: ScoreElement[];
}

export interface SectionConfig {
  [kay: string]: ConfigElement;
}
export interface Section {
  [kay: string]: ScoreElement[];
}

export interface FiguresConfig {
  [kay: string]: SectionConfig;
}
export interface Figures {
  [kay: string]: Section;
}

export interface BonusesConfig {
  [kay: string]: ConfigElement;
}
export interface Bonuses {
  [kay: string]: number | number[] | null;
}

export interface Config {
  school: SchoolConfig;
  figures: FiguresConfig;
  bonuses: BonusesConfig;
}

export interface Score {
  school: School;
  figures: Figures;
}

export interface Sum {
  columnId: number;
  value: number | null;
}

export interface ScorePlayers {
  [kay: string]: Score | null;
}

export interface SumPlayer {
  round: number;
  columns: number[];
  thousandBonus: number;
  restBonuses: number;
  schoolBonus: number;
  school: number[];
  schoolAll?: number;
  sumFor1000Bonus?: number;
  sumWithoutBonuses?: number;
  all: number;
}

export interface SumPlayers {
  [kay: string]: SumPlayer;
}

export interface ScoresTableState {
  config: Config;
  scores: ScorePlayers | null;
  bonuses: BonusesPlayers | null;
  sum: SumPlayers | null;
  gameStarted: boolean;
  bonusThousandGranted: boolean;
}

export interface SaveScore {
  score: ScoreElement | null;
  playerId: number;
  scoreType: ConfigElement;
}

export interface StatsValues {
  player: number;
  [kay: string]: number;
}

export interface PlayerCompareValues {
  player: number;
  [kay: string]: number;
}

export interface BonusesPlayers {
  [kay: string]: Bonuses;
}
