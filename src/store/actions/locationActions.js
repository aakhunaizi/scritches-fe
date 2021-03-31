import instance from "./instance";
import * as types from "./types";

// Fetch Countries
export const fetchCountries = () => async (dispatch) => {
  try {
    const res = await instance.get("/country");
    dispatch({ type: types.FETCH_COUNTRIES, payload: res.data });
  } catch (error) {
    console.log("Error: ", error);
  }
};
