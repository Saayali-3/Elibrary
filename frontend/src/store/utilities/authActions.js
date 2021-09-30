import * as AT from "./authTypes";
import axios from "axios";

export const authenticateUser = (username, password) => {
  const credentials = {
    username: username,
    password: password,
  };
  console.log(username,password)
  return (dispatch) => {
    dispatch({
      type: AT.LOGIN_REQUEST,
    });
    axios
      .post("http://localhost:8080/authenticate", credentials)
      .then((response) => {
        let token = response.data.token;
        localStorage.setItem("jwtToken", token);
        dispatch(success({isLoggedIn:true}));
      })
      .catch((error) => {
        dispatch(failure({isLoggedIn:true}));
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: AT.LOGOUT_REQUEST,
    });
    localStorage.removeItem("jwtToken");
    dispatch(success({isLoggedIn:false}));
  };
};

const success = (isLoggedIn) => {
 
  return {
  
    type: AT.SUCCESS,
    payload:isLoggedIn,
  };
};

const failure = (isLoggedIn) => {
  return {
    type: AT.FAILURE,
    payload:isLoggedIn,
  };
};