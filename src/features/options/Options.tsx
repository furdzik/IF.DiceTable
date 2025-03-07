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
  const roundsPerPlayer = useSelector((state: RootState) => state.options.roundsPerPlayer);
  const players = useSelector((state: RootState) => state.options.players);
  const showStats = useSelector((state: RootState) => state.options.showStats);

  useEffect(() => {
    dispatch(loadOptions());
  }, [dispatch]);

  return (
    <OptionsComponent
      options={{ columns, roundsPerPlayer, players, showStats }}
      saveData={(data: OptionsState) => {
        dispatch(saveData(data));
      }}
      clearData={() => {
        dispatch(clearOptionData());
        dispatch(clearScoreData());
      }}
      onModalClose={props.onModalClose}
    />
  );
};

export default Options;
