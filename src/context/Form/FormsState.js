// ./src/context/Forms/FormsState.js

// EXTERNAL PACKAGE IMPORTS
import { useReducer } from "react";

// CONTEXT Y REDUCER IMPORTS
import FormsContext from "./FormsContext";
import FormsReducer from "./FormsReducer";

const FormsState = (props) => {

  const initialState = {};

  const [globalState, dispatch] = useReducer(FormsReducer, initialState);

  return (
    <FormsContext.Provider
      value={
        {

        }
      }
    >
      {props.children}
    </FormsContext.Provider>
  );
};

export default FormsState;
