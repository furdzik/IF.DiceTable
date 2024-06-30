import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, OptionsState, RootState } from 'interfaces';

import OptionsComponent from 'components/Options';

import { loadOptions, saveData, clearData } from './optionsSlice';

export interface OptionsProps {
  onModalClose: () => void;
}

const Options = (props: OptionsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const columns = useSelector((state: RootState) => state.options.columns);
  const players = useSelector((state: RootState) => state.options.players);

  useEffect(() => {
    dispatch(loadOptions());
  }, [dispatch]);

  return (
    <OptionsComponent
      options={{ columns, players }}
      saveData={(data: OptionsState) => dispatch(saveData(data))}
      clearData={() => dispatch(clearData())}
      onModalClose={props.onModalClose}
    />
  );
};

export default Options;
