import { scores } from '../../config/constants';
import { optionsValues } from '../Options/Options.reducer';

const options = JSON.parse(localStorage.getItem('options'))
  || optionsValues;
const scoresInitialValues = JSON.parse(localStorage.getItem('scores'))
  || Array(options.columnsNumber).fill(scores);

export const initialState = {
  initialValues: {
    options,
    scores: scoresInitialValues
  },
  scores: Array(options.columnsNumber).fill(scores)
};

const actionTypes = {
  SAVE_SCORES: 'SCORES/SAVE_SCORES'
};

export const scoresTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_OPTIONS: {
      const { scores } = action.payload;

      localStorage.setItem('scores', JSON.stringify(scores));

      return {
        ...state,
        scores
      };
    }

    default:
      return state;
  }
};

const saveScores = (values) => ({
  type: actionTypes.SAVE_SCORES,
  payload: values
});

export const onSubmitScoresFn = (values) => (dispatch) => {
  dispatch(saveScores(values));
};


export default scoresTableReducer;
