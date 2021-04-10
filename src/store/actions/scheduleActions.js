import instance from "./instance";
import * as types from "./types";

// Add Date
export const addDate = (sitterId, newDate) => async (dispatch) => {
  try {
    const res = await instance.post(`/sitters/${sitterId}/schedule`, newDate);
    dispatch({ type: types.ADD_DATE, payload: res.data });
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Delete Date
export const deleteDate = (scheduleId) => async (dispatch) => {
  try {
    await instance.delete(`/schedules/${scheduleId}`);
    dispatch({ type: types.DELETE_DATE, payload: scheduleId });
  } catch (error) {
    console.log("Error: ", error);
  }
};
