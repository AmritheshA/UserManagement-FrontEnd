import axiosInstance from "../../../Config/Axios/axiosConfig";
import * as actionTypes from "./actionConstents";

export const DELETE_USER = (user) => {
  return {
    type: actionTypes.DELETE_USER,
    payload: user,
  };
};

export const deleteUser = (users, userDetails) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axiosInstance.delete(
      `/admin/delete-user?email=${userDetails?.email}`,
      config
    );

    const removedUsers = users.filter((user) => user.id !== userDetails.id);

    dispatch(DELETE_USER(removedUsers));
  } catch (error) {
    console.log(error.message);
  }
};
