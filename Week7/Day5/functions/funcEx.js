// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

function age ( my_age )
{
	let mumAge = my_age * 2
	let dadAge = mumAge * 1.2
	console.log(mumAge);
	console.log(dadAge);
}

age(40)