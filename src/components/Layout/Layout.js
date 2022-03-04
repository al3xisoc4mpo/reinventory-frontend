// ./src/components/Layout/Layout.js

import { Outlet } from "react-router-dom"

import Header from './Header'
import Footer from './Footer'
import NewHeader from './NewHeader'


export default function Layout() {
  return (
	<>
		<NewHeader />
		{/* <Header /> */}
			
			<Outlet />

		<Footer />
	
	</>
  )
}