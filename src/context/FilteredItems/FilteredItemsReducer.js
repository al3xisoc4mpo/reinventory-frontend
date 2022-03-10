const reducer = (globalState, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        ...globalState,
        filteredItems: action.payload,
      };

    case "RESTORE":
      return {
        ...globalState,
        filteredItems: action.payload,
      };
    default:
      return globalState;
  }
};

export default reducer;
