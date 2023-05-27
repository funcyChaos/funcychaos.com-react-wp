import React from 'react'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './funcyLogo-sm.png'
import './scss/App.scss'

function App() {
    return (
			<div className="app-grid">
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
				<main>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={
								<h1>Hello, World!</h1>
							} />
							<Route path="/blog" element={
								<h1>Blog!</h1>
							} />
							<Route path="/about" element={
								<h1>about!</h1>
							} />
						</Routes>
					</BrowserRouter>
				</main>
				<Footer />
			</div>
    );
}

export default App;