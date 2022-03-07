// routes/NoLoggedUser.js

// EXTERNAL PACKAGE IMPORTS
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

// INTERNAL PACKAGE IMPORTS
import UsersContext from "../context/Users/UsersContext";

export default function NoLoggedUser({ component: Component }) {
  // USERS CONTEXT IMPORT
  const usersCtx = useContext(UsersContext);
  // DESCTRUCTURING OF USERS CONTEXT
  const { authStatus, verifyToken } = usersCtx;

  // VERIFIES TOKEN AND ASSIGNS LOGGED STATUS
  useEffect(() => {
    verifyToken();
  }, [authStatus]);

  return <div>{authStatus ? <Navigate replace to="/" /> : <Component />}</div>;
}
