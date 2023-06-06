import React from 'react'
// import { useLoaderData } from 'react-router-dom'

import { Await, defer, useLoaderData } from 'react-router-dom'

// async function loader() {
//   const promise = fetch('/wp-json/wp/v2/posts?_embed&per_page=100')

//   return defer({
//     posts: promsise,
//   })
// }

function PostsList(){
	const posts = useLoaderData()
	console.log(posts)
	
	return (
		<>
		<React.Suspense
        fallback={<p>Loading...</p>}
      >
        <Await
          resolve={posts}
          errorElement={
            <p>Error loading package location!</p>
          }
        >
          {
						// posts.map((post, key)=>(
						// 	<div key={key}>
						// 		<h1>{post.title.rendered}</h1>
						// 		<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}} />
						// 	</div>
						// ))
						<h1>Loaded</h1>
					}
        </Await>
      </React.Suspense>
			{
				// posts.map((post, key)=>(
				// 	<div key={key}>
				// 		<h1>{post.title.rendered}</h1>
				// 		<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}} />
				// 	</div>
				// ))
			}
		</>
	)
}

export default PostsList