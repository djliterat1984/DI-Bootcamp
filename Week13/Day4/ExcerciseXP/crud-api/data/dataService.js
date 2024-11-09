import axios from 'axios';

export const fetchPosts = async() => {
	try {
		return await axios.get( 'https://jsonplaceholder.typicode.com/posts' );
		// console.log(response.data);
		// if ( response.status == 200 ) {
		// 	const data = await response.data;	
		// 	ret
		// }
	} catch (error) {
	 console.log(error); 	
	}	
}