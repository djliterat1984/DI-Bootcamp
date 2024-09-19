// Instructions
// 1.Write a JavaScript program that recreates the pattern below.
// 2.Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// 3.Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

const starsNumber = 7
const char = '*'
const newLine = '\n'
let sent = ''

for ( let i = 0; i < starsNumber; i++ )
{
	// I only searched on internet how to repeat a char (like 'string'* number in python)
	if ( i === starsNumber )
		sent += char.repeat(i)
	sent += char.repeat( i ) + newLine	
}
console.log(sent);

sent = ''
for (let i = 1; i < starsNumber; i++) {
	for (let j = 1; j <= i; j++) {
		if ( j == i )
			sent += char+newLine
		else
			sent += char
	}
}
console.log(sent);