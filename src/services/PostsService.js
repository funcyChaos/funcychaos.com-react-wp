export async function getAllPosts(){
	try{
		const response	= fetch('wp-json/wp/v2/posts')
		const data 			= (await response).json()
		const object 		= await data
		return await object
	}catch(error){
		return {error: 'idk what happened lol'}
	}
}