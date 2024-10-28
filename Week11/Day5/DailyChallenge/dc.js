// Instructions
// 1.Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// 2.In the HTML file, add a form, containing an input and a button. 
// This input is used to fetch gif depending on a specific category.
// 3.In the JS file, create a program to fetch one random gif depending on the search of the user 
// ( ie.If the search is “sun”, append on the page one gif with a category of “sun”).
// 4.The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// 5.Allow the user to delete a specific gif by clicking the DELETE button.
// 6.Allow the user to remove all of the GIFs by clicking a DELETE ALL button. 

const BASE_URL = 'https://api.giphy.com/v1/gifs/random'	
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
const imagesContainer = document.getElementById( 'imagesContainer' );

let imagesCount = 0
const getImage = async (category) => {
	const response = await fetch( `${ BASE_URL }?tag=${ category }&&api_key=${ API_KEY }` )
	let result = await response.json()
	const image = document.createElement( 'img' )
	image.src = new URL( result.data.images[ 'original' ].url );
	image.style.width = '200px'
	image.style.height = '200px'
	image.style.margin = '10px'
	
	return image;
}

document.getElementById( 'getDataBtn' ).addEventListener( 'click', async ( event ) => {
	event.preventDefault();
	const category = document.getElementById( 'categoryInput' ).value
	try {
		if ( category == '' )
			alert( 'The Field can not be empty' )
		else {
			const imgContainer = document.createElement( 'div' )
			
			const imageElement = await getImage(category)
			imgContainer.append(imageElement)
			
			const deleteButton = document.createElement( 'button' )
			deleteButton.textContent = "Delete"
			deleteButton.style.width = '100px'
			deleteButton.addEventListener( 'click', (e) => {
				e.preventDefault()
				deleteButton.parentElement.remove()
			} )
			
			imgContainer.style.display = 'flex'
			imgContainer.style.justifyContent = 'center'
			imgContainer.style.alignItems = 'center'
			imgContainer.style.flexDirection = 'column'
			imgContainer.append( deleteButton )
			imagesContainer.append( imgContainer )
		}
	} catch (error) {
		console.log(error);
	}
} )

document.getElementById( 'deleteAllBtn' ).addEventListener( 'click', ( e ) => {
	e.preventDefault()
	imagesContainer.innerHTML = ''
} )





