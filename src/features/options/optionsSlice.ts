import { createSlice } from '@reduxjs/toolkit';

import { OptionsState } from 'interfaces';

const initialState: OptionsState = {
  columns: 3,
  players: [
    { id: 1, name: 'Gracz 1' },
    { id: 2, name: 'Gracz 2' }
  ]
};

const options = createSlice({
  name: 'options',
  initialState,
  reducers: {
    initOptions (state) {
      localStorage.setItem('options', JSON.stringify({ ...state }));
      return {
        ...state
      };
    },
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

export const { initOptions, loadOptions, saveData, clearData } = options.actions;

export default options.reducer;