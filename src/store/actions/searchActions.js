import instance from "./instance";
import * as types from "./types";

// Search Sitters
export const searchSitters = (query, history) => async (dispatch) => {
  try {
    const res = await instance.post("/sitters/search", query);
    dispatch({ type: types.SET_QUERY, payload: query });
    dispatch({ type: types.SEARCH_SITTERS, payload: res.data });
    history.push("/search");
  } catch (error) {
    console.log("Error: ", error.response.data);
  }
};
