import { createSlice } from '@reduxjs/toolkit';

import _cloneDeep from 'lodash/cloneDeep';

import {
  BonusesPlayers,
  Player,
  PlayerCompareValues,
  ScorePlayers,
  ScoresTableState,
  SumPlayers
} from 'interfaces';
import { config, scoresDefault, bonusesDefault } from 'constant';
import {
  iterateAndSetNewValue,
  getCorrectValue,
  updateScoreElement,
  iterateAndSumValues,
  getSum,
  calculatePlayerBonus
} from 'utils';

const initialState: ScoresTableState = {
  config,
  scores: null,
  bonuses: null,
  sum: null,
  gameStarted: false,
  bonusThousandGranted: false
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
      const bonuses = _cloneDeep(bonusesDefault);

      iterateAndSetNewValue(getCorrectValue, score, { columns });
      iterateAndSetNewValue(getCorrectValue, bonuses, { columns });

      const newScores: ScorePlayers = {};
      const newBonuses: BonusesPlayers = {};
      players?.forEach((player: Player) => {
        newScores[`player${player.id}`] = stateFromStorage?.scores?.[`player${player.id}`] || _cloneDeep(score);
        newBonuses[`player${player.id}`] = stateFromStorage?.bonuses?.[`player${player.id}`] || _cloneDeep(bonuses);
      });

      localStorage.setItem('scoresTable', JSON.stringify({
        ...state,
        scores: newScores,
        bonuses: newBonuses
      }));

      return {
        ...state,
        scores: newScores,
        bonuses: newBonuses
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
      let gameStarted = false;

      Object.entries(allScores || {})?.forEach(([player, value]) => {
        const scores = iterateAndSumValues(value, config);

        const sums = getSum(scores.results, columns);
        const sumsSchool = getSum(scores.school, columns);

        const playerSum = sums.sum - sumsSchool.sum;

        const bonuses = state.bonuses?.[player];
        const thousandBonus = (bonuses?.thousandBonus || 0) as number;
        const restBonuses = 0; // bonuses.restBonuses;
        const schoolBonus = 0; // bonuses.schoolBonus;

        newSum[player] = {
          round: scores?.results?.length,
          columns: sums.sumByColumn,
          thousandBonus,
          restBonuses,
          schoolBonus,
          school: sumsSchool.sumByColumn,
          schoolAll: sumsSchool.sum,
          sumWithoutBonuses: playerSum,
          all: playerSum + thousandBonus + restBonuses + schoolBonus
        };

        gameStarted = !gameStarted ? scores?.results?.length > 0 : gameStarted;
      });

      localStorage.setItem('scoresTable', JSON.stringify({
        ...state,
        sum: newSum,
        gameStarted
      }));

      return {
        ...state,
        sum: newSum,
        gameStarted
      };
    },
    calculateBonus (state, action) {
      const { allScores, players, sum, config } = action.payload;
      let newBonuses: BonusesPlayers = {};
      const bonusThousandGrantedResultsBefore: boolean[] = [];
      const bonusThousandGrantedResultsAfter: boolean[] = [];

      const thousandBonusResult: PlayerCompareValues[] = [];

      players?.forEach((player: Player) => {
        thousandBonusResult.push({
          player: player.id,
          sum: sum?.[`player${player?.id}`]?.sumWithoutBonuses,
          round: sum?.[`player${player?.id}`]?.round
        });
        bonusThousandGrantedResultsBefore.push((state.bonuses?.[`player${player?.id}`]?.thousandBonus || 0) > 0);
      });

      players?.forEach((player: Player) => {
        const playerBonuses = calculatePlayerBonus(
          player,
          allScores?.[`player${player?.id}`],
          sum?.[`player${player?.id}`],
          state.bonuses,
          config,
          thousandBonusResult,
          bonusThousandGrantedResultsBefore.includes(true)
        )
        newBonuses = {
          ...newBonuses,
          [`player${player?.id}`]: playerBonuses
        };
        bonusThousandGrantedResultsAfter.push((playerBonuses?.thousandBonus as number || 0) > 0);
      });

      localStorage.setItem('scoresTable', JSON.stringify({
        ...state,
        bonuses: newBonuses,
        bonusThousandGranted: bonusThousandGrantedResultsAfter.includes(true)
      }));

      return {
        ...state,
        bonuses: newBonuses,
        bonusThousandGranted: bonusThousandGrantedResultsAfter.includes(true)
      };
    },
    clearScoreData (state) {
      localStorage.setItem('scoresTable', JSON.stringify({
        ...state,
        ...initialState
      }));

      return {
        ...state,
        ...initialState
      };
    }
  }
});

export const {
  initScoresTable,
  loadScoresTable,
  saveScore,
  calculateSum,
  calculateBonus,
  clearScoreData
} = scoresTable.actions;

export default scoresTable.reducer;
