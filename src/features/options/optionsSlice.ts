import { createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

import { OptionsState } from 'interfaces';
import { colorsByOrder } from 'constant';

const initialStateFromStorage: OptionsState = JSON.parse(localStorage.getItem('options') || '{}');
const initialStateDefault: OptionsState = {
  columns: 3,
  players:  [
    { id: 1, name: 'Gracz 1', color: colorsByOrder[0] },
    { id: 2, name: 'Gracz 2', color: colorsByOrder[1] }
  ],
  showStats: true
};

const options = createSlice({
  name: 'options',
  initialState: !isEmpty(initialStateFromStorage) ? initialStateFromStorage : initialStateDefault,
  reducers: {
    loadOptions (state) {
      const stateFromStorage = JSON.parse(localStorage.getItem('options') || '{}');
      return {
        ...state,
        ...stateFromStorage
      };
    },
    saveData (state, action) {
      localStorage.setItem('options', JSON.stringify({
        ...state,
        ...action.payload
      }));

      return {
        ...state,
        ...action.payload
      };
    },
    clearOptionData (state) {
      localStorage.setItem('options', JSON.stringify({
        ...state,
        ...initialStateDefault
      }));
      localStorage.removeItem('previousNumberOfColumns');

      return {
        ...state,
        ...initialStateDefault
      };
    }
  }
});

export const { loadOptions, saveData, clearOptionData } = options.actions;

export default options.reducer;
