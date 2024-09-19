// Instructions
// 1.Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

let sentence = "The movie is not that bad, I like it"

// 2.Create a variable called wordNot where it’s value is the first appearance (ie. the position) 
// of the substring “not” ( from the sentence variable).

let wordNot = sentence.indexOf('not')
console.log('wordNot',wordNot);

// 3.Create a variable called wordBad where it’s value is the first appearance (ie. the position) 
// of the substring “bad” ( from the sentence variable).

let wordBad = sentence.indexOf('bad')
console.log('wordBad', wordBad);

// 4.If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, 
// then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
	

// 5.If the word “bad” does not come after “not” or the words are not in the sentence, console.log 
// the original sentence.
// Example:

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'

if ( wordBad === -1 || wordNot === -1 || wordBad < wordNot ){
	console.log(sentence);
}
else if ( wordBad > wordNot )
{	
	let start = sentence.indexOf( 'not' )	
	let end = sentence.indexOf( 'bad' )
	let newSentence = sentence.substring( 0, start ) + 'good' + sentence.substring( end + 'bad'.length )
	console.log( newSentence );
}


