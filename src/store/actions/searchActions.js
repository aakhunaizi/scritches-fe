import instance from "./instance";
import * as types from "./types";

// Search Sitters
export const searchSitters = (query) => async (dispatch) => {
  try {
    dispatch({ type: types.SET_QUERY, payload: query });
    const res = await instance.post("/sitters/search", query);
    console.log(res.data);
    dispatch({ type: types.SEARCH_SITTERS, payload: res.data });
  } catch (error) {
    console.log("Error: ", error);
  }
};
