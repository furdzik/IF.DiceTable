import { createSlice } from '@reduxjs/toolkit';

import { scoresTableState } from 'interfaces';
import { config } from 'constant';

const initialState: scoresTableState = {
  config,
  results: {}
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