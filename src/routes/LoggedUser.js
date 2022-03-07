// routes/LoggedUser.js

// EXTERNAL PACKAGE IMPORTS
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

// INTERNAL PACKAGE IMPORTS
import UsersContext from "../context/Users/UsersContext";

// LOGGED USER FUNCTION
export default function LoggedUser({ component: Component }) {
  // USERS CONTEXT IMPORT
  const usersCtx = useContext(UsersContext);
  // DESCTRUCTURE OF USERS CONTEXT
  const { authStatus, verifyToken } = usersCtx;

  // VERIFIES TOKEN AND ASSIGNS LOGGED STATUS
  useEffect(() => {
    verifyToken();
  }, [authStatus]);

  return <div>{authStatus ? <Component /> : <Navigate replace to="/" />}</div>;
}
