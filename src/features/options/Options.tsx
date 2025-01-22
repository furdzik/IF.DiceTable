import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, OptionsState, RootState } from 'interfaces';

import OptionsComponent from 'components/Options';

import { clearScoreData } from 'features/scoresTable/scoresTableSlice';

import { loadOptions, saveData, clearOptionData } from './optionsSlice';

export interface OptionsProps {
  onModalClose: () => void;
}

const Options = (props: OptionsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const columns = useSelector((state: RootState) => state.options.columns);
  const players = useSelector((state: RootState) => state.options.players);
  const showStats = useSelector((state: RootState) => state.options.showStats);
  const gameStarted = useSelector((state: RootState) => state.scoresTable.gameStarted);

  useEffect(() => {
    dispatch(loadOptions());
  }, [dispatch]);

  return (
    <OptionsComponent
      options={{ columns, players, showStats }}
      saveData={(data: OptionsState) => {
        dispatch(saveData(data));
      }}
      clearData={() => {
        dispatch(clearOptionData());
        dispatch(clearScoreData());
      }}
      onModalClose={props.onModalClose}
      gameStarted={gameStarted}
    />
  );
};

export default Options;
