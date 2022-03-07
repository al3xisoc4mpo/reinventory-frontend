// ./src/context/Forms/FormsState.js

// EXTERNAL PACKAGE IMPORTS
import { useReducer } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../../config/axios";

// CONTEXT Y REDUCER IMPORTS
import LocationsContext from "./LocationsContext";
import LocationsReducer from "./LocationsReducer";

const LocationsState = (props) => {

  const initialState = {
    locations:[]
  };

  const [globalState, dispatch] = useReducer(LocationsReducer, initialState);

  // CREATING LOCATIONS
  const createLocation = async (dataForm) => {
    try {
      const res = await axiosClient.post("/api/locations/create", dataForm);

      // console.log(res);

      return (<Navigate replace to="/locations" />); /// ***
    } catch (error) {
      console.log(error);
    }
  };

  // READING ALL LOCATIONS
    const getLocations = async () => {

      try {

        const res = await axiosClient.get("/api/locations/all");
  
        console.log(res);

        const arrLocations = res.data.data

        dispatch({
          type: "GET_LOCATIONS",
          payload: arrLocations
        })
  
        return

      } catch (error) {
        console.log(error);
      }
    };

      // READING SELECTED LOCATION
      const getLocation = async (locationId) => {

        const id = locationId
        // console.log(id)
        
        try {
  
          const res = await axiosClient.get(`/api/locations/${id}`);
    
          // console.log(res);
  
          const arrLocations = res.data.data
  
          dispatch({
            type: "GET_LOCATION",
            payload: arrLocations
          })
    
          return
  
        } catch (error) {
          console.log(error);
        }
      };

      // EDITING DETAILS FOR SELECTED LOCATIONS

      const editLocation = async () => {

        

      }




  return (
    <LocationsContext.Provider
      value={{
        locations: globalState.locations,
        createLocation,
        getLocations,
        getLocation,
      }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsState;
