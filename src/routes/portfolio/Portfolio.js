import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function Portfolio(){
	const [type, setType] = useState('software_dev')
	console.log(window.location.pathname == '/portfolio')
	return (
		<>
			{window.location.pathname == '/portfolio' ? 
			<div className="aside">
				<h1 onClick={()=>setType('software_dev')}>Software Development</h1>
				<h1 onClick={()=>setType('automotive')}>Automotive</h1>
			</div> :
			null}
			<Outlet context={[type, setType]} />
		</>
	)
}

export default Portfolio