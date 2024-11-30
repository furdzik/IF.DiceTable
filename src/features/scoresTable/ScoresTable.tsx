import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState, SaveScore } from 'interfaces';

import ScoresTableComponent from 'components/ScoresTable';

import { initScoresTable, saveScore, calculateSum, calculateBonus } from './scoresTableSlice';

const ScoresTable = () => {
  const dispatch = useDispatch<AppDispatch>();

  const config = useSelector((state: RootState) => state.scoresTable.config);
  const columns = useSelector((state: RootState) => state.options.columns);
  const players = useSelector((state: RootState) => state.options.players);
  const showStats = useSelector((state: RootState) => state.options.showStats);

  useEffect(() => {
    dispatch(initScoresTable({ columns, players }));
  }, [dispatch, columns, players]);

  const scores = useSelector((state: RootState) => state.scoresTable.scores);
  const bonuses = useSelector((state: RootState) => state.scoresTable.bonuses);
  const sum = useSelector((state: RootState) => state.scoresTable.sum);
  const gameStarted = useSelector((state: RootState) => state.scoresTable.gameStarted);

  useEffect(() => {
    dispatch(calculateSum({ allScores: scores, config, columns }));
  }, [dispatch, scores, config, columns]);

  useEffect(() => {
    dispatch(calculateBonus({ allScores: scores, players, sum, bonusesConfig: config.bonuses }));
  }, [dispatch, scores, players, sum, config, columns]);

  return scores && bonuses && sum && (
    <ScoresTableComponent
      config={config}
      scores={scores}
      bonuses={bonuses}
      sum={sum}
      gameStarted={gameStarted}
      options={{ columns, players, showStats }}
      saveScore={({ score, playerId, scoreType }: SaveScore) => {
        dispatch(saveScore({ score, playerId, scoreType, allScores: scores }));
      }}
    />
  );
};

export default ScoresTable;
