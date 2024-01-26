import axiosInstance from "../../../Config/Axios/axiosConfig";
import * as actionTypes from "./actionConstents";




export const ADD_NEW_USER = (allUsers) => {
    return {
      type: actionTypes.GET_ALL_USER,
      payload : allUsers,
    };
  };
  
  


  export const fetchAllUsers = () =>async (dispatch) =>{
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
      
          const response = await axiosInstance.get(
            "/admin/all-users",
            config
          );

          const users = response.data;
          dispatch(ADD_NEW_USER(users));
        
    } catch (error) {
        console.log(error.message);
    }
  }
      