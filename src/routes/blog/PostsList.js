import React from 'react'
import { useLoaderData } from 'react-router-dom'

function PostsList(){
	const posts = useLoaderData()
	console.log(posts)
	
	return (
		<>
			{
				posts.map((post, key)=>(
					<div className='post' key={key}>
						<a href={post.link}>
							<h1>{post.title.rendered}</h1>
						</a>
						<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}} />
					</div>
				))
			}
		</>
	)
}

export default PostsList