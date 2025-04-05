import { FigureId, ResultsId } from 'constant';
import { Player } from './options';

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
  fullName?: string;
  initialValue?: number;
  value: number | ElementValue;
  resultsId?: ResultsId;
  rows?: number;
  sectionNames?: FigureId[];
  minimalSum?: number;
  maxBonusValue?: number;
  valuePerColumn?: boolean;
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

export type BonusTypes = number | number[] | null | RestBonusesDetails;

export interface RestBonusesDetails {
  [kay: string]: number | number[] | null;
}

export interface Bonuses {
  [kay: string]: BonusTypes;
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
  schoolBonus: number | number[];
  columnBonus: number[];
  school: number[];
  schoolAll?: number;
  sumWithoutBonuses?: number;
  all: number;
  allSumWithoutSchool: number;
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
  gameEnded: boolean;
  bonusThousandGranted: boolean;
}

export interface SaveScore {
  score: ScoreElement | null;
  playerId: number;
  scoreType: ConfigElement;
}

export interface Stats {
  currentPlayer: number;
  currentRound: number;
  currentWinner: number;
  difference: string[];
  numberOfRounds: number;
  winners: string[]
  winner: Player;
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
