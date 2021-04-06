import instance from "./instance";
import * as types from "./types";

// Search Sitters
export const searchSitters = (query) => async (dispatch) => {
  try {
    const res = await instance.post("/sitters/search", query);
    dispatch({ type: types.SEARCH_SITTERS, payload: res.data });
    console.log(res.data);
  } catch (error) {
    console.log("Error: ", error);
  }
};
