import React, {useEffect} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header 			from './components/Header'
import Footer 			from './components/Footer'
import Slash 				from './routes/Slash'
import Blog 				from './routes/blog/Blog'
import PostsList		from './routes/blog/PostsList'
import Post					from './routes/blog/Post'
import Portfolio		from './routes/portfolio/Portfolio'
import ProjectList	from './routes/portfolio/ProjectList'
import Project 			from './routes/portfolio/Project'
import About 				from './routes/About'
import './scss/App.scss'

const router = createBrowserRouter([
	{
		path: 		"/",
		element:	<Slash/>
	},
	{
		path: "/blog",
		element: <Blog/>,
		children: [
			{
				index: true,
				element: <PostsList/>,
				loader: ()=>fetch('/wp-json/wp/v2/posts?_embed&per_page=100'),
			},
			{
				path: ":slug",
				element: <Post/>,
				loader: ({params})=>fetch(`/wp-json/wp/v2/posts/?slug=${params.slug}`)
			}
		],
	},
	{
		path: "/portfolio",
		element: <Portfolio/>,
		children: [
			{
				index: true,
				element: <ProjectList/>,
				loader: ()=>fetch('/wp-json/wp/v2/projects?_embed&per_page=100'),
			},
			{
				path: ":slug",
				element: <Project/>,
				loader: ({params})=>fetch(`/wp-json/wp/v2/projects/?slug=${params.slug}`)
			}
		]
	},
	{ path: "/about", element: <About/> },
	{ path: "*", element: <h1>That's not real</h1>}
])

function App() {
	useEffect(()=>{
		let loc = window.location.pathname.substring(1)
		if(!loc)document.title = 'funcyChaos'
		else{
			loc = loc.substring(0, loc.length-1)
			document.title = `fc-${loc}`
		}
	}, [])

    return (
			<div className="app-grid">
				<Header />
				<RouterProvider router={router} />
				<Footer />
			</div>
    );
}

export default App