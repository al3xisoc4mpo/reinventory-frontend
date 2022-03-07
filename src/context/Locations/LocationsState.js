// ./src/context/Forms/FormsState.js

// EXTERNAL PACKAGE IMPORTS
import { useReducer } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../../config/axios";

// CONTEXT Y REDUCER IMPORTS
import LocationsContext from "./LocationsContext";
import LocationsReducer from "./LocationsReducer";

const LocationsState = (props) => {

  const initialState = {};

  const [globalState, dispatch] = useReducer(LocationsReducer, initialState);

  const createLocation = async (dataForm) => {

    try {

        const res = await axiosClient.post("/api/locations/create", dataForm)

        console.log(res)

        return <Navigate replace to="/locations" />;

    } catch (error) {

        console.log(error)

    }

    

}

  return (
    <LocationsContext.Provider
      value={
        {
            createLocation,
        }
      }
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsState;
