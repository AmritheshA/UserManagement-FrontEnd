import * as actionType from "./actionConstents";

export const updateProfilePic = (url) => ({
  type: actionType.USER_PROFILE_UPDATE,
  payload: url,
});

export const removeProfilePic = () => ({
  type: actionType.USER_PROFILE_REMOVE,
});
