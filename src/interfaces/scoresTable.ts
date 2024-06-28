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

export interface School {
  [kay: number]: ConfigElement | ScoreElement[];
}

export interface Section {
  [kay: string]: ConfigElement | ScoreElement[];
}

export interface Figures {
  [kay: string]: Section;
}

export interface Bonuses {
  [kay: string]: ConfigElement | number | number[] | null;
}

export interface Config {
  school: School;
  figures: Figures;
  bonuses: Bonuses;
  sum?: number[] | null;
}

export interface ScorePlayers {
  [kay: string]: Config | null;
}

export interface ScoresTableState {
  config: Config;
  scores: ScorePlayers | null;
}
