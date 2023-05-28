import React from 'react'
import logo from '../funcyLogo-sm.png'

function Header(){
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<h2>funcyChaos.com</h2>
			<div className="menu">
				<a href="/">Home</a>
				<a href="/blog">Blog</a>
				<a href="/about">About</a>
			</div>
		</header>
	)
}

export default Header