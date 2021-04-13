import instance from "./instance";
import * as types from "./types";

// Create Booking
export const createBooking = (booking) => async () => {
  try {
    await instance.post("/bookings", booking);
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Update Booking
export const updateBooking = (bookingId, bookingStatus) => async (dispatch) => {
  try {
    const res = await instance.put(`/bookings/${bookingId}`, {
      status: bookingStatus,
    });
    dispatch({
      type: types.UPDATE_BOOKING,
      payload: { bookingId: res.data.id, status: res.data.status },
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};
