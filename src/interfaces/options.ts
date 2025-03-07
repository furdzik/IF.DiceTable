export enum Colors {
  Pink = '#ab2473', // '#b05088',
  Blue = '#2059c9',
  Green = '#188369', // '#1b9779',
  Orange = '#ce5d07',
  Red = '#c63232',
  Velvet = '#6121c0'
}

export interface Player {
  id: number;
  name: string;
  startingPlayer?: boolean;
  color: Colors | string | undefined;
}

export interface OptionsState {
  columns: number;
  roundsPerPlayer: number;
  players: Player[];
  showStats: boolean;
}

export interface Options {
  columns: number;
  roundsPerPlayer: number;
  players: Player[];
  showStats: boolean;
}
