import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function Blog(){
	return (
		<>
			<Outlet />
		</>
	)
}

export default Blog