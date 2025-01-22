export enum Colors {
  Pink = '#ab2473', // '#b05088',
  Green = '#188369', // '#1b9779',
  Blue = '#2059c9',
  Orange = '#ce5d07',
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
  showStats: boolean;
}

export interface Options {
  columns: number;
  players: Player[];
  showStats: boolean;
}
