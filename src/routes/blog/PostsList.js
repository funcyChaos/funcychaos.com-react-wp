import React from 'react'
import { useLoaderData } from 'react-router-dom'

function PostsList(){
	const posts = useLoaderData()
	console.log(posts)
	
	return (
		<>
			{
				posts.map((post, key)=>(
					<div key={key}>
						<h1>{post.title.rendered}</h1>
						<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}} />
					</div>
				))
			}
		</>
	)
}

export default PostsList