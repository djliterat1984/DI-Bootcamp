const getAllProducts = async() => {
	try {
		const response = await fetch( 'http://localhost:3001/products/all/' )
		if ( response.ok ) {
			const result = await response.json();
			const products = JSON.stringify( result )
			console.log('products',products);
			document.getElementById( 'productsContainer' ).innerHTML = products
		}
	} catch (error) {
		console.log(error);
	}
}

const resetFields = () => {
	document.getElementById( 'name' ).value = ''
	document.getElementById( 'price' ).value = ''
}

const addProduct = async(prodName, price) => {
	try {
		const response = await fetch( 'http://localhost:3001/products/', {
			method: 'POST',
			body: JSON.stringify( { name: prodName, price: price } ),
			headers: {
				"Content-Type": "application/json"
			}
		} )
		if ( response.ok ) {
			const result = await response.statusText
			if ( result.toLowerCase() === 'created' )
				getAllProducts()
		
		resetFields()
		}
	} catch (error) {
		console.log(error);
	}
}

const addBtn = document.getElementById( 'addBtn' );
addBtn.addEventListener( 'click',( event ) => {
	event.preventDefault()
	const inputName = document.getElementById( 'name' );
	const inputPrice = document.getElementById( 'price' );
	const prodName = inputName.value;
	const price = inputPrice.value;
	addProduct(prodName, price)
} )

getAllProducts();