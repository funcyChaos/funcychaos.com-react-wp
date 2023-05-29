export async function getAllPosts(){
	try{
		const response	= fetch('/wp-json/wp/v2/posts?_embed&per_page=100')
		const data 			= (await response).json()
		const object 		= await data
		return await object
	}catch(error){
		return {error:{title:{rendered:'idk what happened lol'}}}
	}
}

export async function getSinglePost(id){
	const response	= fetch(`/wp-json/wp/v2/posts/${id}`)
	const data			= (await response).json()
	const object		= await data
	return await object
}