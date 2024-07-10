import { createSlice } from '@reduxjs/toolkit';

import _cloneDeep from 'lodash/cloneDeep';

import { Player, ScorePlayers, ScoresTableState, SumPlayers } from 'interfaces';
import { config, scoresDefault } from 'constant';
import {
  iterateAndSetNewValue,
  getCorrectValue,
  updateScoreElement,
  iterateAndSumValues,
  getSum
} from 'utils';

const initialState: ScoresTableState = {
  config,
  scores: null,
  sum: null
};

const scoresTable = createSlice({
  name: 'scoresTable',
  initialState,
  reducers: {
    loadScoresTable (state) {
      const stateFromStorage = JSON.parse(localStorage.getItem('scoresTable') || '{}');
      return {
        ...state,
        ...stateFromStorage
      };
    },
    initScoresTable (state, action) {
      const { columns, players } = action.payload;
      const stateFromStorage = JSON.parse(localStorage.getItem('scoresTable') || '{}');

      const score = _cloneDeep(scoresDefault);
      iterateAndSetNewValue(getCorrectValue, score, { columns });

      const newScores: ScorePlayers = {};
      players.forEach((element: Player) => {
        newScores[`player${element.id}`] = stateFromStorage?.scores?.[`player${element.id}`] || _cloneDeep(score);
      });

      localStorage.setItem('scoresTable', JSON.stringify({
        ...state,
        scores: newScores
      }));

      return {
        ...state,
        scores: newScores
      };
    },
    saveScore (state, action) {
      const { score, playerId, scoreType, allScores } = action.payload;

      const newPlayerScore = _cloneDeep(allScores[`player${playerId}`]);
      iterateAndSetNewValue(updateScoreElement, newPlayerScore, { score, scoreType });

      localStorage.setItem('scoresTable', JSON.stringify({
        ...state,
        scores: {
          ...allScores,
          [`player${playerId}`]: newPlayerScore
        }
      }));

      return {
        ...state,
        scores: {
          ...allScores,
          [`player${playerId}`]: newPlayerScore
        }
      };
    },
    calculateSum (state, action) {
      const { allScores, config, columns } = action.payload;
      const newSum: SumPlayers =  {};

      Object.entries(allScores || {})?.forEach(([key, value]) => {
        const scores = iterateAndSumValues(value, config);

        const playerSum = getSum(scores.results, columns);
        const playerSumSchool = getSum(scores.school, columns);
        const bonuses = scores.bonuses;

        newSum[key] = {
          round: scores?.results?.length || 1,
          columns: playerSum.sumByColumn,
          bonuses,
          school: playerSumSchool.sumByColumn,
          all: playerSum.sum + bonuses
        };
      });

      localStorage.setItem('scoresTable', JSON.stringify({
        ...state,
        sum: newSum
      }));

      return {
        ...state,
        sum: newSum
      };
    }
  }
});

export const { initScoresTable, loadScoresTable, saveScore, calculateSum } = scoresTable.actions;

export default scoresTable.reducer;
