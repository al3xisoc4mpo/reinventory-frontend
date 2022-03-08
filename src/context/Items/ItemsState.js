// ./src/context/Forms/ItemsState.js

// EXTERNAL PACKAGE IMPORTS
import { useReducer } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../../config/axios";

// CONTEXT Y REDUCER IMPORTS
import ItemsContext from "./ItemsContext";
import ItemsReducer from "./ItemsReducer";

// LOCATIONS STATE FUNCTION
const ItemsState = (props) => {
  // INITIAL STATE FOR USERS CONTEXT
  const initialState = {
    items:[]
  };
  // SETUP INITIAL STATE AND REDUCER FUNCTION FOR USERS CONTEXT
  const [globalState, dispatch] = useReducer(ItemsReducer, initialState);
  // CREATE LOCATION FUNCTION
  const createItem = async (formData) => {
    try {
      // SEND CREATE LOCATION REQUEST TO THE BACKEND
      const res = await axiosClient.post("/api/items/create", formData);
      console.log(res.data.data);
      return (<Navigate replace to="/locations" />); /// ***
    } catch (error) {
      console.log(error);
    }
  };

  // READING ITEMS FUNCTION
    const getItems = async () => {
      try {
        // SEND GET REQUEST FOR ALL LOCATIONS TO THE BACKEND
        const res = await axiosClient.get("/api/items/all");
        // SAVE ALL LOCATIONS INTO A VARIABLE
        const items = res.data.data
        console.log(items);

        dispatch({
          type: "GET_ITEMS",
          payload: items
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
    <ItemsContext.Provider
      value={{
        items: globalState.items,
        createItem,
        getItems,
        getLocation,
        updateLocation,
        deleteLocation
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsState;
