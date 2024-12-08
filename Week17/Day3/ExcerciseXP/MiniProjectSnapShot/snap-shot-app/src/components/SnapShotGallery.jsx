import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './snapshot.css';
import {OrbitProgress} from 'react-loading-indicators'

const APIKEY = 'RQGRrzszxggEC4nINlVqfhAK4ad1V8Ltnto7Jvhts8neb1aFN1VLbRay'

export default function SnapShotGallery ( props ) {
	const BASE_URL = 'https://api.pexels.com/v1/search';
	const { type } = props;
	const [ images, setImages ] = useState( [] )

	const getImages = async () => {
		try {			
			const response = await fetch( `${ BASE_URL }?query=${ type }&per_page=24`, {
			method: 'GET',
				headers: {
				'Content-Type': 'application/json',
				'Authorization': APIKEY
			}
			} );
			const data = await response.json();
			setImages( data.photos );
		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(() => {
		return () => {
			getImages();
		}
	}, [type] )
	
	getImages(); 
	
	
	return (
		<>
			{ 
				<div className='container'>
					{ images.map( ( item, index ) => {
						return <div className='imgContainer'>
						<img
							key={ index }
							className='image'
							src={ item.src.original }
						/>
						</div>
					} ) }
				</div>
			}
		</>
	)
}
