import {
  USER_VALUE_SUCCESS,
  USER_VALUE_FAIL
  } from "../constants/userConstant";


export const userValueReducer = (state = "", action) => {
switch(action.type){
    case USER_VALUE_SUCCESS:
      return { userInfo: action.payload };
    case USER_VALUE_FAIL:
      return {error: action.payload };
    default:
      return state;
    }
}

