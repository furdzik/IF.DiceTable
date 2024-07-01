import { FigureId, ResultsId } from 'constant';

export enum Throw {
  first,
  second,
  third
}

export type X = 'X';

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
  value?: number | null | X;
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
  bonuses: Bonuses;
  sum?: number[] | null;
}

export interface ScorePlayers {
  [kay: string]: Score | null;
}

export interface ScoresTableState {
  config: Config;
  scores: ScorePlayers | null;
}
