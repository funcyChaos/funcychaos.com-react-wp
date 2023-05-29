import React, {useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './scss/App.scss'
import PostsList from './components/PostsList'
import Post from './components/Post'

function App() {
	useEffect(()=>{
		const loc = window.location.pathname.substring(1)
		if(!loc)document.title = 'funcyChaos'
		else document.title = `fc-${loc}`
	}, [])

    return (
			<div className="app-grid">
				<Header />
				<main>
					<Router>
						<Routes>
							<Route path='/' element={<h1>Hello, World!</h1>} />
							<Route path='/blog' element={<Blog />}>
								<Route index element={<PostsList />} />
								<Route path=':id' element={<Post />} />
							</Route>
							<Route path='/about' element={<h1>about!</h1>} />
							<Route path='*' element={<h1>Nope</h1>} />
						</Routes>
					</Router>
				</main>
				<Footer />
			</div>
    );
}

export default App;