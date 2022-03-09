const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...globalState,
        items: action.payload,
      };

    case "GET_ITEM":
      return {
        ...globalState,
        items: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
