const reducer = (globalState, action) => {

	switch (action.type) {
		case "GET_LOCATIONS":
			return {
				...globalState,
				locations: action.payload
			}

            case "GET_LOCATION":
                return {
                    ...globalState,
                    locations: action.payload
                }

		default:
			return globalState
	}
}

export default reducer