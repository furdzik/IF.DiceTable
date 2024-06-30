import { createSlice } from '@reduxjs/toolkit';

import { OptionsState } from 'interfaces';
import { colorsByOrder } from 'constant';

const initialState: OptionsState = {
  columns: 3,
  players: [
    { id: 1, name: 'Gracz 1', color: colorsByOrder[0] },
    { id: 2, name: 'Gracz 2', color: colorsByOrder[1] }
  ]
};

const options = createSlice({
  name: 'options',
  initialState,
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
    clearData (state) {
      localStorage.setItem('options', JSON.stringify({
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

export const { loadOptions, saveData, clearData } = options.actions;

export default options.reducer;
