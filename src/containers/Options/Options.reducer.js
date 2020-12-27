const optionsInitialValues = JSON.parse(localStorage.getItem('options')) || {
  columnsNumber: 3,
    players: []
};

export const initialState = {
  initialValues: {
    options: optionsInitialValues
  },
  options: {
    columnsNumber: null,
    players: []
  }
};

const actionTypes = {
  SAVE_OPTIONS: 'OPTIONS/SAVE_OPTIONS'
};

export const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_OPTIONS: {
      const { options } = action.payload;

      localStorage.setItem('options', JSON.stringify(options));

      return {
        ...state,
        options
      };
    }

    default:
      return state;
  }
};

const saveOptions = (values) => ({
  type: actionTypes.SAVE_OPTIONS,
  payload: values
});

export const onSubmitOptionsFn = (values) => (dispatch) => {
  dispatch(saveOptions(values));
};


export default optionsReducer;
