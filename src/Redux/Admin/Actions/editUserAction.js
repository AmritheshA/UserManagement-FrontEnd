import axiosInstance from "../../../Config/Axios/axiosConfig";
import { fetchAllUsers } from "./fetchUserAction";



export const editUserAction = (email,newName) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axiosInstance.get(
      `/admin/edit-user?email=${email}&username=${newName}`,
      config
    );

    dispatch(fetchAllUsers());
    
  } catch (error) {
    console.log(error.message);
  }
};
