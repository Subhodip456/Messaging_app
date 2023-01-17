import {
  USER_VALUE_SUCCESS,
  USER_VALUE_FAIL
  } from "../constants/userConstant";
  import axios from "axios";

export const userValue = (username) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:2500/Searchuser",{ 
        Name:username
    })
    console.log("data",data)
    dispatch({ type: USER_VALUE_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));  
  } 
  catch (error) {
    dispatch({type: USER_VALUE_FAIL,payload:error});
    console.log("error")
  }
}


