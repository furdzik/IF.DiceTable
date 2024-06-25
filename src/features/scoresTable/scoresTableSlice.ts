import { createSlice } from '@reduxjs/toolkit';

import { scoresTableState } from 'interfaces';

const initialState: scoresTableState = {
  columns: 3,
  players: [
    { id: 1, name: 'Gracz 1' },
    { id: 2, name: 'Gracz 2' }
  ]
};

const scoresTable = createSlice({
  name: 'scoresTable',
  initialState,
  reducers: {
    initScoresTable (state) {
      localStorage.setItem('scoresTable', JSON.stringify({ ...state }));
      return {
        ...state
      };
    },
    loadScoresTable (state) {
      const stateFromStorage = JSON.parse(localStorage.getItem('scoresTable') || '{}');
      return {
        ...state,
        ...stateFromStorage
      };
    },
    
  }
});

export const { initScoresTable, loadScoresTable } = scoresTable.actions;

export default scoresTable.reducer;