import React, {useEffect} from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './routes/Blog'
import './scss/App.scss'
import PostsList from './routes/PostsList'
import Post from './routes/Post'

const router = createBrowserRouter([
	{
		path: "/",
		element: <h1>Hello, World!</h1>
	},
	{
		path: "/blog",
		element: <Blog/>,
		children: [
			{
				index: true, 
				element: <PostsList/>,
				// loader: ()=>fetch('/wp-json/wp/v2/posts?_embed&per_page=100'),
				loader: ()=>{
					const promise = fetch('/wp-json/wp/v2/posts?_embed&per_page=100')

					return defer({
						posts: promise,
					})
				}
			},
			{
				path: ":slug",
				element: <Post/>,
				loader: ({params})=>fetch(`/wp-json/wp/v2/posts/?slug=${params.slug}`)
			}
		],
	},
	{ path: "/about", element: <h1>about!</h1> },
	{ path: "*", element: <h1>Nope</h1>}
])

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
					<RouterProvider router={router} />
				</main>
				<Footer />
			</div>
    );
}

export default App