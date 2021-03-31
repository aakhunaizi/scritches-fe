import * as types from "../actions/types";

const initialState = { sitter: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SITTER:
      return { ...state, sitter: action.payload };

    default:
      return state;
  }
};

export default reducer;
