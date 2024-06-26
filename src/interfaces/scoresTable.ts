import { FigureId, ResultsId } from 'constant';

export interface ElementValue {
  [kay: number]: number;
}

export interface Element {
  id?: FigureId;
  name: string;
  initialValue?: number;
  value: number | ElementValue;
  resultsId?: ResultsId;
}

export interface School {
  [kay: number]: Element;
}

export interface Section {
  [kay: string]: Element;
}

export interface Figures {
  [kay: string]: Section;
}

export interface Bonuses {
  [kay: string]: Element;
}

export interface Config {
  school: School;
  figures: Figures;
  bonuses: Bonuses;
}

export interface scoresTableState {
  config: Config;
  results: any;
}
