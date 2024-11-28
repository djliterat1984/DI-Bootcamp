import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import './Products.css'

const Products = ( props ) => {
	const [products,setProducts] = useState([])
	
	useEffect( () => {
		getAllProducts()
	}, [] )
	
	const getAllProducts = async () => {
		try {
			const response = await fetch( 'http://localhost:3001/products/all/' );
			const data = await response.json();
			console.log(data);
			setProducts(data)
		} catch (error) {
			console.log(error);
		}
	}
	
	const addProduct = async(e) => {
		e.preventDefault();
		const formData = new FormData( e.target );
		const newProd = {}
		formData.forEach( ( value, key ) => {
			newProd[key]=value
		} )
		
		const res = await fetch( 'http://localhost:3001/products/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( newProd )
		} );
		
		const data = await res.json();
		console.log(data);
		
		getAllProducts();
		
	}
	
	return (
		<>
			<h2>Shop</h2>
			<form onSubmit={ ( e ) => addProduct(e)}>
				<input type="text" name="name" id="name" placeholder='Product name' />
				<input type="text" name="price" id="price" placeholder='Product price' />
				<input type="submit" value={'Add Product'} />
			</form>
			
			<div className='container'>
			{
				products.map( item => {
					return (
						<div key={ item.id } className='card'>
							<h2 style={{color:'black'}}>{ item.name }</h2>
							<h4 style={{color:'black'}}>${ item.price }</h4>
							<Link to={`/all/${item.id}`}>Buy me</Link>
						</div>
					)
				} )
				}
			</div>
		</>
	);
};


export default Products;