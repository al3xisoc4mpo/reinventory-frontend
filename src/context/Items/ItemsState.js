// ./src/context/Forms/ItemsState.js

// EXTERNAL PACKAGE IMPORTS
import { useReducer } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../../config/axios";

// CONTEXT Y REDUCER IMPORTS
import ItemsContext from "./ItemsContext";
import ItemsReducer from "./ItemsReducer";

// ITEMS STATE FUNCTION
const ItemsState = (props) => {
  // INITIAL STATE FOR ITEMS CONTEXT
  const initialState = {
    items:[]
  };
  // SETUP INITIAL STATE AND REDUCER FUNCTION FOR ITEMS CONTEXT
  const [globalState, dispatch] = useReducer(ItemsReducer, initialState);
  // CREATE ITEM FUNCTION
  const createItem = async (formData) => {
    try {
      // SEND CREATE ITEM REQUEST TO THE BACKEND
      const res = await axiosClient.post("/api/items/create", formData);
      console.log(res.data.data);
      return (<Navigate replace to="/locations" />); /// ***
    } catch (error) {
      console.log(error);
    }
  };

  // READING ITEMS FUNCTION
    const getItems = async (user) => {

      try {
        // SEND GET REQUEST FOR ALL ITEMS TO THE BACKEND
        const res = await axiosClient.post("/api/items/all",{user});
        // SAVE ALL ITEMS INTO A VARIABLE
        const items = res.data.data

        dispatch({
          type: "GET_ITEMS",
          payload: items
        })
  
        return

      } catch (error) {
        console.log(error);
      }
    };

      // READING SELECTED ITEM
      const getItem = async (itemId) => {
        // OBTANING DE ID THROUGH THE ARGUMENTS
        const id = itemId
        // console.log(id)
        try {
          // SEND GET REQUEST FOR SINGLE LOCATION TO THE BACKEND
          const res = await axiosClient.get(`/api/items/${id}`);
          // console.log(res);
          const item = res.data.data

          dispatch({
            type: "GET_ITEM",
            payload: item
          })
          return

        } catch (error) {
          console.log(error);
        }
      };

      // EDITING DETAILS FOR SELECTED LOCATIONS

      const updateItem = async (formData) => {

        const {id} = formData
          try {
            // SEND UPDATE REQUEST TO THE BACKEND
            const res = await axiosClient.post(`/api/items/${id}/update`, formData);
            console.log(res.data.data);
            return (<Navigate replace to="/locations" />); /// ***
          } catch (error) {
            console.log(error);
          }
        };

      // DELETE LOCATION

      const deleteItem = async (itemId) => {

        const id = itemId
        console.log(id)
        
          try {
            // SEND UPDATE REQUEST TO THE BACKEND
            const res = await axiosClient.post(`/api/items/${id}/delete`,{id});
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
        getItem,
        updateItem,
        deleteItem
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsState;
