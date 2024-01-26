import { combineReducers } from "redux";
import userReducer from "../User/Reducers/userReducer";
import { adminReducer } from "../Admin/Reducers/adminReducer";


const rootReducer = combineReducers({
    userReducer,
    adminReducer,
  });
  
  export default rootReducer;