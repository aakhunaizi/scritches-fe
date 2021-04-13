import * as types from "../actions/types";

const initialState = { bookings: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BOOKINGS:
      return { ...state, bookings: action.payload };

    case types.UPDATE_BOOKING:
      const { bookingId, status } = action.payload;
      const foundBooking = state.bookings.find(
        (booking) => booking.id === bookingId
      );
      foundBooking.status = status;
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking.id === bookingId ? foundBooking : booking
        ),
      };

    default:
      return state;
  }
};

export default reducer;
