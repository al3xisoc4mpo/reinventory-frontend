// ./src/context/Forms/FormsState.js

// EXTERNAL PACKAGE IMPORTS
import { useReducer } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../../config/axios";

// CONTEXT Y REDUCER IMPORTS
import LocationsContext from "./LocationsContext";
import LocationsReducer from "./LocationsReducer";

// LOCATIONS STATE FUNCTION
const LocationsState = (props) => {
  // INITIAL STATE FOR USERS CONTEXT
  const initialState = {
    locations:[]
  };
  // SETUP INITIAL STATE AND REDUCER FUNCTION FOR USERS CONTEXT
  const [globalState, dispatch] = useReducer(LocationsReducer, initialState);
  // CREATE LOCATION FUNCTION
  const createLocation = async (formData) => {
    try {
      // SEND CREATE LOCATION REQUEST TO THE BACKEND
      const res = await axiosClient.post("/api/locations/create", formData);
      console.log(res.data.data);
      return (<Navigate replace to="/locations" />); /// ***
    } catch (error) {
      console.log(error);
    }
  };

  // READING LOCATION FUNCTION
    const getLocations = async () => {
      try {
        // SEND GET REQUEST FOR ALL LOCATIONS TO THE BACKEND
        const res = await axiosClient.get("/api/locations/all");
        // SAVE ALL LOCATIONS INTO A VARIABLE
        const locations = res.data.data
        console.log(locations);

        dispatch({
          type: "GET_LOCATIONS",
          payload: locations
        })
  
        return

      } catch (error) {
        console.log(error);
      }
    };

      // READING SELECTED LOCATION
      const getLocation = async (locationId) => {
        // OBTANING DE ID THROUGH THE ARGUMENTS
        const id = locationId
        // console.log(id)
        try {
          // SEND GET REQUEST FOR SINGLE LOCATION TO THE BACKEND
          const res = await axiosClient.get(`/api/locations/${id}`);
          // console.log(res);
          const location = res.data.data

          dispatch({
            type: "GET_LOCATION",
            payload: location
          })
          return
        } catch (error) {
          console.log(error);
        }
      };

      // EDITING DETAILS FOR SELECTED LOCATIONS

      const updateLocation = async (formData,locationId) => {

        const id = locationId
          try {
            // SEND UPDATE REQUEST TO THE BACKEND
            const res = await axiosClient.post(`/api/locations/${id}/update`, formData);
            console.log(res.data.data);
            return (<Navigate replace to="/locations" />); /// ***
          } catch (error) {
            console.log(error);
          }
        };

      // DELETE LOCATION

      const deleteLocation = async (locationId) => {

        const id = locationId
        
          try {
            // SEND UPDATE REQUEST TO THE BACKEND
            const res = await axiosClient.post(`/api/locations/${id}/delete`);
            console.log(res.data.data);
            return (<Navigate replace to="/locations" />); /// ***
          } catch (error) {
            console.log(error);
          }
        };



  return (
    <LocationsContext.Provider
      value={{
        locations: globalState.locations,
        createLocation,
        getLocations,
        getLocation,
        updateLocation,
        deleteLocation
      }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsState;
