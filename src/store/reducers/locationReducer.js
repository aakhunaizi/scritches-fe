import * as types from "../actions/types";

const initialState = { countries: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COUNTRIES:
      return { ...state, countries: action.payload };

    default:
      return state;
  }
};

export default reducer;
