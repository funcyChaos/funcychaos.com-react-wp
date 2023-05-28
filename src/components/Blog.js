import React, { useState, useEffect } from 'react'
import { getAllPosts } from '../services/PostsService'

function Blog(){
	const [posts, setPosts] = useState(null)
	useEffect(()=>{
		getAllPosts()
		.then(obj=>setPosts(obj))
	},[posts])
	
	return (
		<>
			{
				posts && posts.map((post, key)=>(
					<div key={key}>
						<h1 dangerouslySetInnerHTML={{ __html: post.title.rendered}}></h1>
						<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}} />
					</div>
				))
			}
		</>
	)
}

export default Blog