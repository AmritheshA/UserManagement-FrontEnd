import axiosInstance from "../../../Config/Axios/axiosConfig";
import * as actionTypes from "./actionConstents";

export const ADD_NEW_USER = (userDetails) => {
  return {
    type: actionTypes.ADD_NEW_USER,
    payload : userDetails,
  };
};

export const addNewUser = (userDetails) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axiosInstance.post(
      "/admin/add-user",
      userDetails,
      config
    );

    dispatch(ADD_NEW_USER(userDetails));
    
  } catch (error) {
    console.log(error.message);
  }
};
