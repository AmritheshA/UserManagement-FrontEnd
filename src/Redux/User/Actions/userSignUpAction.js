import axiosInstance from "../../../Config/Axios/axiosConfig";
import { USER_REGISTER_FAILURE } from "./actionConstents";
import { USER_REGISTER_REQUEST } from "./actionConstents";
import { USER_REGISTER_SUCCESS } from "./actionConstents";

export const userRegisterRequest = () => ({
  type: USER_REGISTER_REQUEST,
});

export const userRegisterSuccess = () => ({
  type: USER_REGISTER_SUCCESS,
});

export const userRegisterFailure = (error) => ({
  type: USER_REGISTER_FAILURE,
  payload: error,
});

export const userRegister = (userData,onSuccess) => async (dispatch) => {
  try {
    dispatch(userRegisterRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axiosInstance.post(
      "/auth/sign-up",
      userData,
      config
    );

    if (response && response.data && response.data.error) {
      dispatch(userRegisterFailure(response.data.error));
    } else {
      dispatch(userRegisterSuccess());
      onSuccess() // The callback function for redirect to "/login"
    }
  } catch (error) {
    if (error.response && error.response.status === 409) {
      dispatch(userRegisterFailure("Email Already Exist"));
    }
  }
};
