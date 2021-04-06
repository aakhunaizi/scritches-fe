import * as types from "../actions/types";

const initialState = { sitters: null };

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_SITTERS:
      return { ...state, sitters: action.payload };

    default:
      return state;
  }
};

export default SearchReducer;
