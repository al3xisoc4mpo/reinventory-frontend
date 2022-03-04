// . /src/components/Layout/Header.js

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'



export default function Header() {


	const ctxUser = useContext(UsersContext)

	const {
		currentUser,
		authStatus,
		logoutUser
	} = ctxUser



  return (
	<>
		<header>
			<figure>
				LOGO
			</figure>
				
			<nav>
				<ul>

					{
						authStatus ?
						(
							<>
								<li>
									<Link
										to="/"
										onClick={() => {logoutUser()}}
										// className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
									>
										Cerrar sesión		
									</Link>
								</li>
								<li>{currentUser.name}</li>
							</>
						) :
						(
							<>
								<li>
									<Link
										to="/registro"
										className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
										>
									Crear cuenta
									</Link>
								</li>
								<li>
									<Link
										to="/login"
										className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
										>
									Iniciar sesión
									</Link>
								</li>
							</>
						)

					}

					
					

				</ul>

			</nav>
		</header>
	
	</>


  )
}