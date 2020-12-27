export const initialState = {
  initialValues: {
    options: {
      columnsNumber: null,
      players: null
    }
  }
};

const actionTypes = {
  SHOW_LOADER: 'MAIN_PAGE/SHOW_LOADER'
};

export const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADER: {
      return {
        ...state,
        loading: true
      };
    }

    default:
      return state;
  }
};

// const showLoader = () => ({
//   type: actionTypes.SHOW_LOADER
// });

export default mainPageReducer;
