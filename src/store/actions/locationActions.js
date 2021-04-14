import instance from "./instance";
import * as types from "./types";

// Fetch Countries
export const fetchCountries = () => async (dispatch) => {
  try {
    const res = await instance.get("/countries");
    dispatch({ type: types.FETCH_COUNTRIES, payload: res.data });
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Update Last Location
export const updateLastLocation = (location) => {
  return { type: types.SET_LOCATION, payload: location };
};
