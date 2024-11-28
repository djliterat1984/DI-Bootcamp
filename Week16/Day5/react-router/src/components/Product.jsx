import { useParams, Link, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'

const Product = ( props ) => {
	const params = useParams();
	const navigate = useNavigate();
	
	const [ product, setProduct ] = useState( {} );
	
	useEffect( () => {
		getInfo()
	}, [] )
	const toHome = () => {
		navigate('/home')
	}
	
	const getInfo = async() => {
		try {
			const res = await fetch( `http://localhost:3001/products/all/${ params.id }` )
			const data = await res.json();
			console.log(data);
			setProduct(data)
		} catch (error) {
			console.log(error);
			
		}
	}
	
	return (
		<>
			<h2>{ product.name }</h2>
			<h3>${ product.price }</h3>
			<h3>{product.description}</h3>
		</>
	)
}

export default Product;