export interface Player {
  id: number;
  name: string;
}

export interface OptionsState {
  columns: number;
  players: Player[];
}