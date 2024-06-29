export enum Colors {
  Pink = '#b05088',
  Blue = '#2059c9',
  Orange = '#ce5d07',
  Green = '#1b9779',
  Red = '#c63232',
  Velvet = '#6121c0'
}

export interface Player {
  id: number;
  name: string;
  color: Colors | string | undefined;
}

export interface OptionsState {
  columns: number;
  players: Player[];
}

export interface Options {
  columns: number;
  players: Player[];
}
