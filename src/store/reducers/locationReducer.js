import * as types from "../actions/types";

const initialState = { countries: null, lastLocation: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COUNTRIES:
      return { ...state, countries: action.payload };

    case types.SET_LOCATION:
      return { ...state, lastLocation: action.payload };

    default:
      return state;
  }
};

export default reducer;
