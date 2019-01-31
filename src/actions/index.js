import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch, getState) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = (token) => async (dispatch, getState) => {
  // backend will confirm payment and update user's credit and then send back the updated user object
  try {
    const response = await axios.post("/api/stripe", token);
    return dispatch({ type: FETCH_USER, payload: response.data });
  } catch (err) {
    if(err)
    console.warn(err.response);
    alert("Could not process payment, please try again later");
  }
};
