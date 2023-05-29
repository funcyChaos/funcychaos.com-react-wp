import React, { useState, useEffect } from 'react'
// import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePost } from '../services/PostsService'

function Post(){
	const {slug}					= useParams()
	const [post, setPost] = useState(null)
	useEffect(()=>{
		getSinglePost()
		.then(obj=>setPost(obj))
		console.log(slug)
	}, [])
	// useEffect(()=>{
	// },[])
	
	return (
		<>
			{
				post ? <h1>Post!</h1> : <h1>No Post...</h1>
			}
		</>
	)
}

export default Post