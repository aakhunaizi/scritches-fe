import * as types from "../actions/types";

const initialState = { query: null, sitters: null };

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_QUERY:
      return { ...state, query: action.payload, sitters: null };

    case types.SEARCH_SITTERS:
      return { ...state, sitters: action.payload };

    default:
      return state;
  }
};

export default SearchReducer;
