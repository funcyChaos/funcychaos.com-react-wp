import React from 'react'
import { Outlet } from 'react-router-dom'

function Blog(){
	return (
		<>
			<main className='blog-list'>
				<Outlet />
			</main>
		</>
	)
}

export default Blog