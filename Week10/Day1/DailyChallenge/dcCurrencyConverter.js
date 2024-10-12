// 1.The program should take the currency which the user currently has and the currency in which they 
// would like to receive, as well as the amount of money.Afterwards, the program will output the correct 
// exchange rate based on the data from the APIs.

// 2.First, you need to fetch all the supported currencies, in order to add the currencies options 
// ( ie FROM - To) in the currency converter.Check out this page on Supported Codes Endpoint from 
// the ExchangeRate API documentation.

// 3.To convert from a currency, to another one, you need to fetch conversion rate from the Pair 
// Conversion API endpoint.Check out this page on Pair conversion requests from the ExchangeRate 
// API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// 4.Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and 
// display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion 
// should be from GBP to EUR.

const APIKEY = 'c081037cd5fefd87b446a710'
let codes = []
const getCodes = async () => {
	try {
		let response = await fetch( `https://v6.exchangerate-api.com/v6/${ APIKEY }/codes` )
		response.json().then( data => {
			codes = data.supported_codes
			setCodes(codes)
		} )
	} catch (error) {
		console.log(error);
	}
}

const setCodes = (codes) => {
	let selectItems = document.getElementsByClassName( 'codes' )
	let defaultCodeFrom = ''
	let defaultCodeTo = ''
	for (let j = 0; j < selectItems.length; j++) {
		for (let i = 0; i < codes.length; i++) {
			let opt = document.createElement( 'option' );
			let codeValue = `${codes[i][0]} - ${codes[i][1]}`
			opt.value = codeValue;
			opt.innerHTML = codeValue;
			if ( codes[ i ][ 0 ] === 'USD' )
				defaultCodeFrom = codeValue
			else if ( codes[ i ][ 0 ] === 'ILS' )
				defaultCodeTo = codeValue
			selectItems[j].appendChild(opt);
		}	
	}
	
	let countryFrom = document.getElementById( 'countryFrom' )
	countryFrom.value = defaultCodeFrom
	let countryTo = document.getElementById( 'countryTo' )
	countryTo.value = defaultCodeTo 
}

const subscribeToConvertEvent = () => {
	let convertBtn = document.getElementById( 'convertBtn' )
	convertBtn.addEventListener( 'click', () => {
		let amount = document.getElementById( 'amountInput' )
		let countryFrom = document.getElementById( 'countryFrom' )
		let countryTo = document.getElementById( 'countryTo' )
		let codeFrom = countryFrom.value.split( '-' )[ 0 ].trim()
		let codeTo = countryTo.value.split('-')[0].trim()		
		convert(codeFrom, codeTo, amount.value)	
	} )
}

const convert = async(codeFrom, codeTo, amount) => {
	let response = await fetch( `https://v6.exchangerate-api.com/v6/${ APIKEY }/pair/${codeFrom}/${codeTo}` )
	let conversionRate = 0
	response.json().then( data => {
		conversionRate = data.conversion_rate
		let convert = document.getElementById( 'convertInput' )
		convert.value = (Math.round( amount * conversionRate * 100 )/100).toString() + ` ${codeTo}`
 	} )
}

getCodes()
subscribeToConvertEvent()