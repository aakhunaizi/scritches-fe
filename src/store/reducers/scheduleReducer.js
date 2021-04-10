import * as types from "../actions/types";

const initialState = { schedule: [] };

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SCHEDULE:
      return { ...state, schedule: action.payload };

    case types.ADD_DATE:
      return { ...state, schedule: [...state.schedule, action.payload] };

    case types.DELETE_DATE:
      return {
        ...state,
        schedule: state.schedule.filter((date) => date.id !== action.payload),
      };

    default:
      return state;
  }
};

export default scheduleReducer;
