// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let credentials = { username: 'nickname', password: '12345678' }
let database = [ credentials ]
let newsfeed = [ { username: 'user1', timeline: 'tl1' }, { username: 'user2', timeline: 'tl2' }, { username: 'user3', timeline: 'tl3' } ]

// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

let age = prompt( 'What is your age?' )
if ( age > 18 ){
	alert("Powering On. Enjoy the ride!")
}
else if ( age == 18 ){
	alert( "Congratulations on your first year of driving. Enjoy the ride!")
}
else
	alert("Sorry, you are too young to drive this car. Powering off")

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"