import { configureStore } from '@reduxjs/toolkit';

import optionsReducer from 'features/options/optionsSlice';

const store = configureStore({
  reducer: {
    options: optionsReducer
  }
});

export default store;