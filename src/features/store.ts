import { configureStore } from '@reduxjs/toolkit';
import { setAutoFreeze } from 'immer';

// @ts-ignore
import optionsReducer from 'features/options/optionsSlice';
import scoresTableReducer from 'features/scoresTable/scoresTableSlice';

setAutoFreeze(false);

export interface Store {
}

const store = configureStore({
  reducer: {
    options: optionsReducer,
    scoresTable: scoresTableReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
  })
});

export default store;