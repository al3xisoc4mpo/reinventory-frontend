// ./src/context/Users/UsersReducer.js

const reducer = (globalState, action) => {

	switch(action.type){

		case "SIGNUP_SUCCESSFUL":
			// STORE TOKEN LOCALLY
			localStorage.setItem("token", action.payload)

			// TRIGGER GLOBAL STATE CHANGE
			return {
				...globalState,
				authStatus: true
			}

		case "SIGNIN_SUCCESSFUL":
			// STORE TOKEN LOCALLY
			localStorage.setItem("token", action.payload)
			// TRIGGER GLOBAL STATE CHANGE
			return {
				...globalState,
				authStatus: true
			}

		case "VERIFY_TOKEN":
			// TRIGGER GLOBAL STATE CHANGE
			return {
				...globalState,
				currentUser: action.payload,
				authStatus: true
			}

		case "SIGNOUT":
			// REMOVE TOKEN LOCALLY
			localStorage.removeItem("token")
			// TRIGGER GLOBAL STATE CHANGE
			return {
				...globalState,
				authStatus: false,
				currentUser: {
					firstName: "",
					lastName: "",
					picture: "",
					email: "",
					_id: ""
				}
			}

		default:
			return globalState


	}


}

export default reducer