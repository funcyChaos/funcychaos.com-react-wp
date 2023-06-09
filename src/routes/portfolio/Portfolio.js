import React from 'react'
import { Outlet } from 'react-router-dom'

function Portfolio(){
	return (
		<main className='project-list'>
			{/* <h1>Austin's Portfolio!</h1> */}
			<Outlet />
		</main>
	)
}

export default Portfolio