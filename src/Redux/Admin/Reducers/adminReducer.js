import * as actionType from "../Actions/actionConstents";

// Initial State
const initialState = {
  users: [],
  message: null,
  error: null,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
    case actionType.ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        message: "Addedd Successfully",
      };
    case actionType.DELETE_USER:
      return {
        ...state,
        users: action.payload,
        message: "Removed Successfully",
      };
    default:
      return state;
  }
};
