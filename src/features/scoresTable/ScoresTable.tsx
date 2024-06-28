import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'interfaces';

import ScoresTableComponent from 'components/ScoresTable';

import { loadScoresTable } from './scoresTableSlice';

const ScoresTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const config = useSelector((state: RootState) => state.scoresTable.config);
  const columns = useSelector((state: RootState) => state.options.columns);
  const players = useSelector((state: RootState) => state.options.players);
  
  useEffect (() => {
    dispatch(loadScoresTable({ columns, players }));
  }, [dispatch, columns, players]);
  
  const scores = useSelector((state: RootState) => state.scoresTable.scores);

  return scores && (
    <ScoresTableComponent
      config={config}
      scores={scores}
      options={{ columns, players }}
    />
  );
}

export default ScoresTable;
