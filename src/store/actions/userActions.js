import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import * as types from "./types";

// Check Token
export const checkForToken = () => (dispatch) => {
  const token = Cookies.get("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime < user.exp) dispatch(setUser(token));
    else dispatch(signout());
  }
};

// Set User
const setUser = (token) => {
  Cookies.set("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return { type: types.SET_USER, payload: decode(token) };
};

// Sign In
export const signin = (user, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", user);
    dispatch(setUser(res.data.token));
    history.replace("/");
    toastMessage("success", "Welcome back!", 2000);
  } catch (error) {
    console.log("Error: ", error);
    toastMessage("error", "Invalid username or password", 1800);
  }
};

// Sign Up
export const signup = (newUser, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", newUser);
    dispatch(setUser(res.data.token));
    history.replace("/");
    toastMessage(
      "success",
      "Your account has been successfully created!",
      3000
    );
  } catch (error) {
    console.log("Error: ", error);
    toastMessage(
      "error",
      "An error has occured while creating your account",
      5000
    );
  }
};

// Sign Out
export const signout = () => (dispatch) => {
  Cookies.remove("token");
  delete instance.defaults.headers.common.Authorization;
  dispatch({ type: types.SET_PETS, payload: null });
  dispatch({ type: types.FETCH_PROFILE, payload: null });
  dispatch({ type: types.SET_USER, payload: null });
  toastMessage("success", "Signed out successfully", 2000);
};

// Fetch Profile
export const fetchProfile = (type) => async (dispatch) => {
  try {
    if (type === "petOwner") {
      const res = await instance.get("/owners");
      dispatch({ type: types.SET_PETS, payload: res.data.pets });
      dispatch({ type: types.FETCH_PROFILE, payload: res.data });
    } else {
      const res = await instance.get("/sitters");
      dispatch({ type: types.FETCH_PROFILE, payload: res.data });
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Update User
export const updateUser = (updatedUser) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedUser) formData.append(key, updatedUser[key]);
    const res = await instance.put("/user", formData);
    dispatch(setUser(res.data.token));
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Update Sitter
export const updateSitter = (updatedSitter) => async (dispatch) => {
  try {
    const res = await instance.put(
      `/sitters/${updatedSitter.id}`,
      updatedSitter
    );
    dispatch({
      type: types.FETCH_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const toastMessage = (icon, message, timer) => {
  Swal.fire({
    icon: icon,
    title: message,
    timer: timer,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
