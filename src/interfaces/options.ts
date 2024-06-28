export interface Player {
  id: number;
  name: string;
}

export interface OptionsState {
  columns: number;
  players: Player[];
}

export interface Options {
  columns: number;
  players: Player[];
}
