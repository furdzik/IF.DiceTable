import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'interfaces';

import ScoresTableComponent from 'components/ScoresTable';

import { loadScoresTable } from './scoresTableSlice';

export interface ScoresTableProps {
}

const ScoresTable = (props: ScoresTableProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const columns = useSelector((state: RootState) => state.options.columns);
  const players = useSelector((state: RootState) => state.options.players);

  useEffect (() => {
    dispatch(loadScoresTable());
  }, [dispatch]);

  return (
    <ScoresTableComponent />
  );
}

export default ScoresTable;
