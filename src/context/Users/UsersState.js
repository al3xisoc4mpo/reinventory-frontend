// ./src/context/Users/UsersState.js

import { useReducer } from 'react'

import UsersReducer from './UsersReducer'
import UsersContext from './UsersContext'

import axiosClient from './../../config/axios'

const UsersState = (props) => {

	const initialState = {
		currentUser: {
			name: "",
			lastName: "",
			email: ""
		},
		authStatus: false
	}

	const [globalState, dispatch] = useReducer(UsersReducer, initialState)

	const registerUser = async (form) => {

		const res = await axiosClient.post("/api/users/create", form)

		const token = res.data.data

		console.log(token)

		dispatch({
			type: "REGISTRO_EXITOSO",
			payload: token
		})

	}

	const verifyingToken = async () => {

		// TOKEN VERIFICATION

		const token = localStorage.getItem("token")

		if (!token){
			return delete axiosClient.defaults.headers.common["x-auth-token"]
		}

		// ATTACHING TOKEN TO NEXT AXIOS REQUEST
		axiosClient.defaults.headers.common["x-auth-token"] = token

		// AXIOS REQUEST
		const res = await axiosClient.get("/api/users/verifytoken")
		
		const userData = res.data.data

		dispatch({
			type: "VERIFICAR_TOKEN",
			payload: userData
		})

	}
	
	const loginUser = async (form) => {

		const res = await axiosClient.post("/api/users/login", form)

		const token = res.data.data

		dispatch({
			type: "LOGIN_EXITOSO",
			payload: token
		})


	}

	const logoutUser = async () => {

		console.log("Logging out")

		dispatch({
			type: "LOG_OUT"
		})

	}


	return (
		<UsersContext.Provider
			value={{
				currentUser: globalState.currentUser,
				authStatus: globalState.authStatus,
				registerUser,
				verifyingToken,
				loginUser,
				logoutUser
			}}
		>
			{props.children}
		</UsersContext.Provider>
	)

}
 


export default UsersState