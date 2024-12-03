import React, { useEffect, useState } from 'react'
import quotes from '../helper/QuotesDatabase';
import generateColor from '../helper/GenerateColor';
import './quoteCard.css'

export default function QuoteCard () {
	
	let lastQuoteIndex = 0;
	
	const [ quoteItem, setQuoteItem ] = useState( {
		quote: '',
		author: '',
		color: 'black'
	} )
	
	useEffect( () => {
		return () => {
			getNewQuote()
		}
	}, [] )
	
	const setBodyBackgroundColor = (color) => {
		document.body.style.backgroundColor = color;
	}
	
	const getNewIndexQuote = ( ) => {
		const indexQuote = Math.floor( Math.random() * quotes.length );
		while (indexQuote == lastQuoteIndex) {
			indexQuote = Math.floor( Math.random() * quotes.length );
		}
		return indexQuote;
	}
	
	const getNewQuote = () => {
		
		const indexQuote = getNewIndexQuote();
		
		lastQuoteIndex = indexQuote
		const backcolor = generateColor();
		setBodyBackgroundColor(backcolor)
		const quote = quotes[ indexQuote ].quote;
		let author = quotes[indexQuote].author;
		if ( author === '' )
			author = 'Unknown';
		setQuoteItem( { author, quote, color: backcolor } );
	}
	
	return (
		<div className='containerdiv'>
				<div>
					<text className='quoteText' style={{color:quoteItem.color}}>"{ quoteItem.quote }"</text>
					<h5 className='authorTxt' style={{color:quoteItem.color}}>-{quoteItem.author}-</h5>
				</div>
			<button className='newQuoteBtn' style={ { backgroundColor: quoteItem.color} }
				onClick={ () => getNewQuote()}>New Quote</button>
		</div>
	)
}
