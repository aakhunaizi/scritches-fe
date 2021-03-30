import * as types from "../actions/types";

const initialState = { user: null, sitter: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload };
    case types.SET_SITTER:
      return {
        ...state,
        sitter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
