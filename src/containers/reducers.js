import { combineReducers } from 'redux';

import MainPage from './MainPage/MainPage.reducer';
import Options from './Options/Options.reducer';

export default combineReducers({
  MainPage,
  Options
});
