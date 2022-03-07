// ./src/context/Users/UsersState.js

// EXTERNAL PACKAGES IMPORTS
import { useReducer } from "react";
import axiosClient from "./../../config/axios";

// INTERNAL IMPORTS
import UsersReducer from "./UsersReducer";
import UsersContext from "./UsersContext";

// USERS STATE FUNCTION
const UsersState = (props) => {
  // INITIAL STATE FOR USERS CONTEXT
  const initialState = {
    currentUser: {
      firstName: "",
      lastName: "",
      picture: "",
      email: "",
    },
    authStatus: false,
  };
  // SETUP INITIAL STATE AND REDUCER FUNCTION FOR USERS CONTEXT
  const [globalState, dispatch] = useReducer(UsersReducer, initialState);
  // SIGNUP USERS FUNCTION
  const signUpUser = async (formData) => {
    // SEND USER SIGN UP FORM DATA TO THE BACKEND
    const res = await axiosClient.post("/api/users/create", formData);
    // OBTAIN TOKEN
    const token = res.data.data;
    // console.log(token);
    // TRIGGER GLOBAL STATE UPDATE
    dispatch({
      type: "SIGNUP_SUCCESSFUL",
      payload: token,
    });
  };

  const verifyToken = async () => {
    // TOKEN VERIFICATION

    const token = localStorage.getItem("token");

    if (!token) {
      return delete axiosClient.defaults.headers.common["x-auth-token"];
    }

    // ATTACHING TOKEN TO NEXT AXIOS REQUEST
    axiosClient.defaults.headers.common["x-auth-token"] = token;

    // AXIOS REQUEST
    const res = await axiosClient.get("/api/users/verifytoken");

    const userData = res.data.data;

    dispatch({
      type: "VERIFY_TOKEN",
      payload: userData,
    });
  };

  const signInUser = async (form) => {
    const res = await axiosClient.post("/api/users/login", form);

    const token = res.data.data;

    dispatch({
      type: "SIGNIN_SUCCESSFUL",
      payload: token,
    });
  };

  // SIGNUP USERS FUNCTION
  const signOutUser = async () => {
    // TRIGGER GLOBAL STATE UPDATE
    dispatch({
      type: "SIGNOUT",
    });
  };

  return (
    <UsersContext.Provider
      value={{
        currentUser: globalState.currentUser,
        authStatus: globalState.authStatus,
        signUpUser,
        verifyToken,
        signInUser,
        signOutUser,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersState;
