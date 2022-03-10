// EXTERNAL PACKAGE IMPORTS
import { useReducer } from "react"

// CONTEXT Y REDUCER IMPORTS
import FilteredItemsContext from "./FilteredItemsContext";
import FilteredItemsReducer from "./FilteredItemsReducer";


const FilteredItemsState = (props) => {

    const initialState = {filteredItems:[]}

    const [globalState, dispatch] = useReducer(FilteredItemsReducer,initialState)

    const filterItems = (str, arr) => {

        console.log("STR:",str)
        console.log("ARR:",arr)

        let filteredItems = arr;

        if (str === "") {
          filteredItems = arr;
        } else {
          filteredItems = arr.filter((itemData) => {
            return itemData.name.toLowerCase().includes(str.toLowerCase())
          });
        }
        
        console.log(filteredItems)

        dispatch({
            type: "FILTER",
            payload: filteredItems
          })

    }

    const restoreFilter = () => {
        dispatch({
            type: "RESTORE",
            payload: []
          })
    }

    return (
        <FilteredItemsContext.Provider
          value={{
            filteredItems: globalState.filteredItems,
            filterItems,
            restoreFilter
          }}
        >
          {props.children}
        </FilteredItemsContext.Provider>
      );
}

export default FilteredItemsState;