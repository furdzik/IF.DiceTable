import { createSlice } from '@reduxjs/toolkit';

import _cloneDeep from 'lodash/cloneDeep';

import { Player, ScorePlayers, ScoresTableState } from 'interfaces';
import { config, scoresDefault } from 'constant';
import { iterateAndSetNewValue } from 'utils';

const initialState: ScoresTableState = {
  config,
  scores: null
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
    loadScoresTable (state, action) {
      const { columns, players } = action.payload;

      let score: any = _cloneDeep(scoresDefault);
      iterateAndSetNewValue(score, columns);
      
      const newScores: ScorePlayers = {};
      players.forEach((element: Player) => {
        newScores[`player${element.id}`] = _cloneDeep(score);
      });
      
      localStorage.setItem('scoresTable', JSON.stringify({
        ...state,
        scores: newScores 
      }));

      return {
        ...state,
        scores: newScores
      };
    }
  }
});

export const { initScoresTable, loadScoresTable } = scoresTable.actions;

export default scoresTable.reducer;