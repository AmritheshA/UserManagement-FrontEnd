import axiosInstance from "../../../Config/Axios/axiosConfig";
import {
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionConstents";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const userLogout = () => ({
  type: USER_LOGOUT_REQUEST,
});

export const userLoginSuccess = (userData) => ({
  type: USER_LOGIN_SUCCESS,
  payload: userData,
});

export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

export const userLogin = (credentials) => async (dispatch) => {
  try {
    dispatch(userLoginRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axiosInstance.post(
      "/auth/login",
      credentials,
      config
    );
    const responseData = response.data;

    if (responseData === "Invalid Credential") {
      dispatch(userLoginFailure(error.message));
      return;
    }

    const decodedJwt = jwtDecode(responseData.jwtToken);
    Cookies.set("jwtToken", responseData.jwtToken);

    dispatch(
      userLoginSuccess({
        username: responseData.user.username,
        role: decodedJwt.role,
        email: decodedJwt.sub,
        url: responseData.user.profileImageUrl,
      })
    );
  } catch (error) {
    console.error(error.message);
    if (error.response && error.response.status) {
      dispatch(userLoginFailure(error.message));
    } else {
      dispatch(
        userLoginFailure(
          "Network Error"
        )
      );
    }
  }
};
