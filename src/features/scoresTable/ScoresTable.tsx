import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'interfaces';

import ScoresTableComponent from 'components/ScoresTable';

import { loadScoresTable } from './scoresTableSlice';

export interface ScoresTableProps {
}

const ScoresTable = (props: ScoresTableProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const config = useSelector((state: RootState) => state.scoresTable.config);
  const scores = useSelector((state: RootState) => state.scoresTable.scores);

  useEffect (() => {
    dispatch(loadScoresTable());
  }, [dispatch]);

  return (
    <ScoresTableComponent config={config} scores={scores} />
  );
}

export default ScoresTable;
