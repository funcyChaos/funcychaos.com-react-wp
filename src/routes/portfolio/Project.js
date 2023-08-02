import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Post(){
	const post = useLoaderData()[0]
	console.log(post)
	
	return (
		<main>
			<h1>{post.title.rendered}</h1>
			<div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
		</main>
	)
}

export default Post