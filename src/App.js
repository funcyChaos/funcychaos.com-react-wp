import React, {useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/App.scss'

function App() {
	useEffect(()=>{
		const loc = location.pathname.substring(1)
		if(!loc)document.title = 'funcyChaos'
		else document.title = `fc-${loc}`
	}, [location])

    return (
			<div className="app-grid">
				<Header />
				<main>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<h1>Hello, World!</h1>} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/about" element={<h1>about!</h1>} />
						</Routes>
					</BrowserRouter>
				</main>
				<Footer />
			</div>
    );
}

export default App;