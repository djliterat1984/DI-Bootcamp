let emojis = []
let randomIndex = 0
let randomIndexOption1 = 0
let randomEmoji;
const getAllEmojis = async () => {
	try {
		const response = await fetch( 'http://localhost:3001/all', {
			method: 'GET', 
			headers:{
				'Content-Type':'application/json'
			}
		} )		
		const result = await response.text()
		emojis = JSON.parse( result ).emojis; 
		startGame(emojis)
	} catch (error) {
		console.log(error);	
	}
}

const reset = () => {
	document.getElementById( 'result' ).textContent = '';
	document.getElementById( 'selectedEmoji' ).value = ''
}
 
const startGame = ( emojis ) => {
	reset();
	setRandomEmoji( emojis )
	setOptions(emojis)
}

const setRandomEmoji = ( emojis ) => {
	randomIndex = getRandomInt( emojis.length - 1 )	
	randomEmoji = emojis[ randomIndex ];
	document.getElementById( 'emojiImg' ).textContent = randomEmoji.emoji
}

const setOptions = ( emojis ) => {
	randomIndexOption1 = getWrongOption(emojis)
	const wrongOption1 = emojis[randomIndexOption1]
	const wrongOption2 = emojis[ getWrongOption(emojis, true ) ]
	
	const option1 = document.getElementById( 'option1' );
	option1.addEventListener( 'click', ( event ) => {
		event.preventDefault();
		const selectedEmoji = document.getElementById( 'selectedEmoji' );	
		selectedEmoji.value = randomEmoji.name;
	} )
	option1.value = randomEmoji.name;

	const option2 = document.getElementById( 'option2' );
	option2.addEventListener( 'click', ( event ) => {
		event.preventDefault()
		const selectedEmoji = document.getElementById( 'selectedEmoji' );	
		selectedEmoji.value = wrongOption1.name;
	} )
	option2.value = wrongOption1.name;
	
	const option3 = document.getElementById( 'option3' ); 
	option3.addEventListener( 'click', (event) => {
		event.preventDefault()
		const selectedEmoji = document.getElementById( 'selectedEmoji' );
		selectedEmoji.value = wrongOption2.name;
	} )
	option3.value = wrongOption2.name;
}

const getRandomInt = (maxIndex) => Math.floor( Math.random() * maxIndex )

const getWrongOption = ( emojis, isWrongOption2 = false ) => {
	let wrongRandomIndex = randomIndex;
	if ( isWrongOption2 ) {
		let isThirdOption = false;
		while ( !isThirdOption) {
			if(wrongRandomIndex != randomIndexOption1 && wrongRandomIndex !== randomIndex)
				isThirdOption = true;			
			else
				wrongRandomIndex = getRandomInt( emojis.length - 1 )
		}
		return wrongRandomIndex;
	}
	else {
		while ( wrongRandomIndex == randomIndex) {
			wrongRandomIndex = getRandomInt(emojis.length - 1)
		}
		return wrongRandomIndex;
	}
}

getAllEmojis();

document.getElementById( 'submitAnswer' ).addEventListener( 'click', async( event ) => {
	event.preventDefault();
	try {
		const selectedEmoji = document.getElementById( 'selectedEmoji' ).value;	
		const response = await fetch( 'http://localhost:3001/result', {
			method: "POST",
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({
				'emoji': randomEmoji.emoji,
				'name': selectedEmoji
			})
		} )
		const result = await response.text();
		const resultText = document.getElementById( 'result' );
		if ( result === "OK")
			resultText.textContent = 'You win'
		else
			resultText.textContent = 'You lose'
		setTimeout( () => {startGame( emojis )}, 2000 );
	} catch (error) {
		console.log(error);
	}
} )