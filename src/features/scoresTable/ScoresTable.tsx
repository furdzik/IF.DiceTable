import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState, SaveScore } from 'interfaces';

import ScoresTableComponent from 'components/ScoresTable';

import { initScoresTable, saveScore, calculateSum } from './scoresTableSlice';

const ScoresTable = () => {
  const dispatch = useDispatch<AppDispatch>();

  const config = useSelector((state: RootState) => state.scoresTable.config);
  const columns = useSelector((state: RootState) => state.options.columns);
  const players = useSelector((state: RootState) => state.options.players);

  useEffect(() => {
    dispatch(initScoresTable({ columns, players }));
  }, [dispatch, columns, players]);

  const scores = useSelector((state: RootState) => state.scoresTable.scores);
  const sum = useSelector((state: RootState) => state.scoresTable.sum);

  useEffect(() => {
    dispatch(calculateSum({ allScores: scores, config, columns }));
    // TODO: check and add bonuses
  }, [dispatch, scores, config, players, columns]);

  return scores && sum && (
    <ScoresTableComponent
      config={config}
      scores={scores}
      sum={sum}
      options={{ columns, players }}
      saveScore={({ score, playerId, scoreType }: SaveScore) => {
        dispatch(saveScore({ score, playerId, scoreType, allScores: scores }));
      }}
    />
  );
};

export default ScoresTable;
