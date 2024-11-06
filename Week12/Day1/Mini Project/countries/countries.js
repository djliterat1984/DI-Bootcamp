const BASE_URL = 'https://restcountries.com/v3.1'
let countryList = []

const createAndSetSpan = (text) => {
	const element = document.createElement( 'span' );
	element.textContent = text;
	element.style.marginRight = '10px'
	return element;
}

const showCountryInfo = ( id ) => {
	let details = document.getElementById( 'details' );
	details.textContent = ''
	
	const country = countryList[ id ]
	document.getElementById( 'countryName' ).textContent = country.name.common
	const flagImg = document.getElementById( 'countryFlag' );
	flagImg.src = new URL( country.flags.png );
	flagImg.style.width = '30px'
	flagImg.style.height = '20px'

	const capital = createAndSetSpan(`Capital:\b ${ country.capital }`)
	const independent = createAndSetSpan("Independent: " + ( country.independent ? 'Yes' : 'No' ))
	
	const currencyKeys = Object.keys( country.currencies )
	let currencies = ''
	currencyKeys.forEach( ( value, index ) => {
		if ( index == 0 )
			currencies += `${ country.currencies[ value ].name } - ${ country.currencies[ value ].symbol }`
		else
			currencies += `, ${ country.currencies[ value ].name } - ${ country.currencies[ value ].symbol }`
	} )
	
	const currenciesElement = createAndSetSpan('Currencies: ' + currencies)
	const population = createAndSetSpan( 'Population: ' + country.population.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," ) );
	const region = createAndSetSpan('Region: ' + country.region)

	const languageKeys = Object.keys( country.languages )
	let languages = ''
	languageKeys.forEach( ( value, index ) => {
		if ( index == 0 )
			languages += `${ country.languages[ value ]}`
		else
			languages += `, ${ country.languages[ value ] }`
	} )
	const languagesElement = createAndSetSpan('Languages: ' + languages)

	details.append( capital )
	details.append( independent )
	details.append(currenciesElement)
	details.append(languagesElement)
	details.append(population)
	details.append( region )
}

const setCountries = ( countries ) => {
	let countriesContainer = document.getElementById( 'countriesContainer' )
	countries.forEach( (country,index) => {
		if ( country.name.common != 'Palestine' ){
			const divCountry = document.createElement('div')
			const countryName = document.createElement( 'p' );
			countryName.textContent = country.name.common;
			countryName.style.height = '40px';
			countryName.style.textAlign = 'center';
			countryName.style.margin = '0px'
		
			const flag = document.createElement( 'img' )
			flag.src = new URL( country.flags.png )
			flag.id = index
			flag.style.width = '60px'
			flag.style.height = '40px'
			flag.style.border = 'solid 1px black';
			flag.addEventListener('click', () => showCountryInfo(flag.id))			
			
			divCountry.append( countryName )
			divCountry.append( flag )
			
			// justify - content: center; background - color = green; "
			divCountry.style.display = 'flex';
			divCountry.style.flexDirection = 'column';	
			divCountry.style.justifyContent = 'center'
			divCountry.style.alignItems = 'center'
			divCountry.style.alignContent = 'center'
			divCountry.style.width = '120px'
			divCountry.style.height = '105px'
			divCountry.style.margin = '5px'
			
			countriesContainer.append( divCountry )
		}
	} )
}

const getAllCountries = async () => {
	try {
		const response = await fetch( `${ BASE_URL }/all` )
		const result = await response.json()
		countryList = result
		countryList.sort( ( a, b ) => {
			const nameA = a.name.common.toUpperCase(); 
			const nameB = b.name.common.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			
			return 0;
		} )
		
		setCountries( countryList )
	} catch (error) {
		alert(error)
	}
}

getAllCountries()
