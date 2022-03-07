// routes/Auth.js

import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Navigate } from 'react-router-dom'
import UsersContext from './../context/Users/UsersContext'


export default function Private({ component: Component, model }) {

	const userCtx = useContext(UsersContext)

	const { 
		authStatus, 
		verifyingToken } = userCtx

	const crudOption = useParams()
	console.log(crudOption)


	useEffect(() => {
		verifyingToken()
	}, [authStatus])

  return (
	<div>

		{
			authStatus ?
			// SI EL USUARIO YA ESTÁ LOGGEADO, ENTONCES, DÉJAME ACCEDER AL COMPONENTE PROP QUE TRAE LA RUTA
            (<Component model={model} option={crudOption.option}/>)
			:
			// SI EL USUARIO NO ESTÁ LOGGEADO, ENTONCES, MANDAR A HOME
            (<Navigate replace to ="/" />)
		}

		
	</div>
  )
}