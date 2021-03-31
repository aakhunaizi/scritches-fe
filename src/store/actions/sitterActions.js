import instance from "./instance";
import * as types from "./types";

// Fetch Sitter
export const fetchSitter = (userId) => async (dispatch) => {
  try {
    const res = await instance.get("/sitter", userId);
    dispatch({
      type: types.SET_SITTER,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

// Update Sitter
export const updateSitter = (updatedSitter) => async (dispatch) => {
  try {
    const res = await instance.put("/sitter", updatedSitter);
    dispatch({
      type: types.SET_SITTER,
      payload: res.data,
    });
  } catch (error) {
    console.log("error:", error);
  }
};
