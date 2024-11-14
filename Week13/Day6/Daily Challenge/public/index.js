const startQuiz = async() => {
	try {
		const response = await fetch( 'http://localhost:3002/quiz' );
		const result = await response.json();
		document.getElementById( 'question' ).textContent = result;
	} catch (error) {
		console.log(error);
	}
}

const showScore = async() => {
	try {
		const response = await fetch( 'http://localhost:3002/quiz/score' );
		const result = await response.json();
		document.getElementById( 'score' ).textContent = `Score: ${result}`;
	} catch (error) {
		console.log(error);
	}
}

const nextQuestion = async() => {
	const answer = document.getElementById( 'answer' );
	let lastQuestion = false;
	try {
		const response = await fetch( 'http://localhost:3002/quiz', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( {
				'answer': answer.value
			} )
		} );
		const result = await response.json();
		lastQuestion = result == "0"
		if ( !lastQuestion )
			startQuiz()
		else
			showScore()
		answer.value = ''		
	} catch (error) {
		console.log(error);
	}
}

document.getElementById( 'nextQuestion' ).addEventListener( 'click', () => nextQuestion() );
startQuiz()