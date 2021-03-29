import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";
import * as types from "./types";
import Swal from "sweetalert2";

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
export const signin = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);
    dispatch(setUser(res.data.token));
    history.replace("/");
    Swal.fire({
      icon: "success",
      title: "Welcome back!",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  } catch (error) {
    console.log("Error: ", error);
    Swal.fire({
      icon: "error",
      title: "Invalid username or password",
      timer: 1800,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }
};

// Sign Up
export const signup = (newUser, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", newUser);
    dispatch(setUser(res.data.token));
    history.replace("/");
    Swal.fire({
      icon: "success",
      title: "Your account has been successfully created!",
      toast: true,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  } catch (error) {
    console.log("Error: ", error);
    Swal.fire({
      icon: "error",
      title: "An error has occured while creating your account",
      toast: true,
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }
};

// Sign Out
export const signout = () => {
  Cookies.remove("token");
  delete instance.defaults.headers.common.Authorization;
  Swal.fire({
    icon: "success",
    title: "Signed out successfully",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
  return { type: types.SET_USER, payload: null };
};
