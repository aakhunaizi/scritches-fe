import * as types from "../actions/types";

const initialState = { bookings: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BOOKINGS:
      return { ...state, bookings: action.payload };

    case types.UPDATE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          action.payload.id === booking.id ? action.payload : booking
        ),
      };

    default:
      return state;
  }
};

export default reducer;
