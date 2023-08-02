import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Post(){
	const post = useLoaderData()[0]
	console.log(post)
	
	return (
		<>
			{/* <div className="aside" onClick={()=>navigate(-1)}>{backTo}</div> */}
			<h1>{post.title.rendered}</h1>
			<div className='blog-post' dangerouslySetInnerHTML={{__html: post.content.rendered}} />
		</>
	)
}

export default Post