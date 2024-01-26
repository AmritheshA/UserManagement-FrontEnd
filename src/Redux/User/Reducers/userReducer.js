import * as actionType from "../Actions/actionConstents";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const token = Cookies.get("jwtToken");
let user = {
  username: "Guest.",
  email: "",
  url: "https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png",
  role: null,
};

if (token) {
  const decoded = jwtDecode(token);
  const { role,sub: email,username } = decoded;
  user = {
    ...user,
    username,
    email,
    role,
  };
}

// Initial State
const initialState = {
  loading: false,
  user: user,
  isAuthenticated: false,
  message: null,
  error: null,
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_LOGOUT_REQUEST:
      Cookies.remove("jwtToken");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
        message: "Logged out successfully",
      };

    case actionType.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        message: "Successfully Loged In",
        error: null,
      };
    case actionType.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case actionType.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionType.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        message: "Registered",
      };
    case actionType.USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionType.USER_PROFILE_UPDATE:
      const updatedUser = {
        ...state.user,
        url: action.payload,
      };
      return {
        ...state,
        user: updatedUser,
      };
    case actionType.USER_PROFILE_REMOVE:
      const picRemovedUser = {
        ...state.user,
        url: "https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png",
      };
      return {
        ...state,
        user: picRemovedUser,
      };
    default:
      return state;
  }
};

export default userReducer;
