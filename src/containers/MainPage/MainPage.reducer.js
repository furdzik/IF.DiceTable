export const initialState = {
};

const actionTypes = {
  SHOW_LOADER: 'MAIN_PAGE/SHOW_LOADER'
};

export default (state = initialState, action) => {
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

const showLoader = () => ({
  type: actionTypes.SHOW_LOADER
});
