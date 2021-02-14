import { combineReducers } from 'redux';

import Options from './Options/Options.reducer';
import Scores from './ScoresTable/ScoresTable.reducer';

export default combineReducers({
  Options,
  Scores
});
