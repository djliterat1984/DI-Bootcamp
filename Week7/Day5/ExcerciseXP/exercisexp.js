// Exercise 1 : Find the numbers divisible by 23
// Instructions
// 1.Create a function call displayNumbersDivisible() that takes no parameter.

// 2.In the function, loop through numbers 0 to 500.

// 3.Console.log all the numbers divisible by 23.

// 4.At the end, console.log the sum of all numbers that are divisible by 23.

const displayNumbersDivisible = (divisorNumber) => {
	listNumbers = ''
	totalSum = 0
	for (let i = 0; i < 500; i++) {
		if ( i % divisorNumber == 0 ) {
			listNumbers += i + ', '
			totalSum += i
		}
	}
	console.log(listNumbers);
	console.log(totalSum);
}


// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.
displayNumbersDivisible(23)
// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
displayNumbersDivisible(3)
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
displayNumbersDivisible(45)
// and their sum


// Exercise 2 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// 1.Add the stock and prices objects to your js file.

// 2.Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. 
// It means that you have 1 banana, 1 orange and 1 apple in your cart.
// 3.Create a function called myBill() that takes no parameters.
// 4.The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// 5.Call the myBill() function.
// 6.Bonus: If the item is in stock, decrease the item’s stock by 1

let shoppingList = ['banana', 'orange','apple']

function myBill ()
{
	let totalPrice = 0
	for (let i = 0; i < shoppingList.length; i++) {
		const item = shoppingList[ i ];
		if ( stock[ item ] > 0 ){
			totalPrice += prices[ item ]
			stock[item]--
		}		
	}
	return totalPrice
}
console.log( myBill() )


// Exercise 3 : What’s in my wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// 1.Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//    - an item price
// 		- and an array representing the amount of change in your pocket.

// 2.In the function, determine whether or not you can afford the item.
// 		- If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// 		- If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

function changeEnough ( itemPrice, amountOfChange ){
	const quarters = amountOfChange[ 0 ] * 0.25
	const dimes = amountOfChange[ 1 ] * 0.10
	const nickel = amountOfChange[ 2 ] * 0.05
	const penny = amountOfChange [3] * 0.01
	let totalChange = quarters + dimes + nickel + penny
	
	return totalChange > itemPrice
}


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
console.log(changeEnough(14.11, [2,100,0,0]));
 
// changeEnough(0.75, [0,0,20,5]) => returns true
console.log(changeEnough(0.75, [0,0,20,5]));


// Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// 1.Define a function called hotelCost().
// 	- It should ask the user for the number of nights they would like to stay in the hotel.
// 	- If the user doesn’t answer or if the answer is not a number, ask again.
// 	- The hotel costs $140 per night. The function should return the total price of the hotel.

const nightCost = 140

function hotelCost ()
{
	let nights;
	do {
		nights = parseInt(prompt( 'How many nights do you want to stay in the hotel? ' ))
	} while (isNaN(nights));

	return nights * nightCost
}

// 2.Define a function called planeRideCost().
		// - It should ask the user for their destination.
		// - If the user doesn’t answer or if the answer is not a string, ask again.
		// - The function should return a different price depending on the location.
		// 			-“London”: 183$
		// 			- “Paris” : 220$
		// 			- All other destination : 300$
		
const londonPrice = 183
const parisPrice = 220
const defaultPrice = 300

function planeRideCost () {
	let destination;
	do {
		destination = prompt( 'Where do you like to go?' )
	} while ( !isNaN( destination ) );
	
	let price;
	switch ( destination ){
		case 'London':
			price = londonPrice
			break;
		case 'Paris':
			price = parisPrice
			break;
		default:
			price = defaultPrice
			break;
	}
	return price
}

// 3.Define a function called rentalCarCost().
		// - It should ask the user for the number of days they would like to rent the car.
		// - If the user doesn’t answer or if the answer is not a number, ask again.
		// - Calculate the cost to rent the car. The car costs $40 everyday.
		// 		- If the user rents a car for more than 10 days, they get a 5% discount.
	// 	 - The function should return the total price of the car rental.

const rentPerDay = 40	

function rentalCarCost (){
	let rentDays;
	do {
		rentDays = parseInt(prompt( 'How many days do you want to rent a car?' ))
	} while ( isNaN( rentDays ) );
	
	let total = rentDays * rentPerDay;
	const discount = 0.05
	if ( rentDays > 10 )
		return total - (total * discount)
	else
		return total
}

// 4.Define a function called totalVacationCost() that returns the total cost of the user’s vacation 
// by calling the 3 functions that you created above.
		// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
		// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost(params) {
	let totalCostHotel = hotelCost()
	let flyCost = planeRideCost()
	let carCost = rentalCarCost()

	return totalCostHotel + flyCost + carCost
}

// Call the function totalVacationCost()

totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


// Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

{/* <div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul> */}


// 1.Add the code above, to your HTML file

// 2.Using Javascript:
// 		1.Retrieve the div and console.log it
let container = document.getElementById( 'container' )
console.log(container);
// 		2.Change the name “Pete” to “Richard”.
let ulItems = document.getElementsByClassName( 'list' )
ulItems[0].children[1].textContent = "Richard"
// 		3.Delete the second <li> of the second <ul>.
ulItems[1].children[1].remove()
// 		4.Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for (let i = 0; i < ulItems.length; i++) {
	ulItems[i].children[0].textContent = 'Diego'
}

// 3.Using Javascript:
// 		1.Add a class called student_list to both of the <ul>'s.
for (let i = 0; i < ulItems.length; i++) {
	ulItems[i].classList.add('student_list')
}
// 	  2.Add the classes university and attendance to the first <ul>.
ulItems[0].classList.add(['university', 'attendance'])

// 4.Using Javascript:
// 		1.Add a “light blue” background color and some padding to the <div>.
container.style.backgroundColor = 'lightBlue'
container.style.padding = "20,5"
// 		2.Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)

ulItems[1].lastElementChild.hidden = true

// 		 3.Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
ulItems[ 0 ].lastElementChild.style.border = '2px solid red'

//	   4.Change the font size of the whole body.

document.getElementById('body').style.fontSize = '30px'

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
let backgroundDiv = container.style.backgroundColor;
const lightBlue = 'lightblue'
if ( backgroundDiv === lightBlue)
{
	alert('Hello X and Y')
}

// Exercise 6 : Change the navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

{/* <div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div> */}


// 1.Add the code above, to your HTML file

// 2.Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

document.getElementById('navBar').setAttribute("id", 'socialNetworkNavigation')

// 3. We are going to add a new <li> to the <ul>.
	// 1.First, create a new <li> tag (use the createElement method).
let newLi = document.createElement('li')
	// 2.Create a new text node with “Logout” as its specified text.
let logoutTxtMode = document.createTextNode('Logout')
	// 3.Append the text node to the newly created list node (<li>).
newLi.append(logoutTxtMode)
	// 4.Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
document.getElementsByTagName('ul')[0].appendChild(newLi)
// 4.Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> 
// elements from their parent element( <ul>). Display the text of each link. (Hint: use the textContent property).
console.log(document.getElementsByTagName('ul')[0].firstElementChild.textContent);
console.log(document.getElementsByTagName('ul')[0].lastElementChild.textContent);

// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// 1.In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// 2.In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// 3.Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// 4.Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let allBooks = [
	{
		title: 'The Lord Of the Ring',
		author: 'J. R. R. Tolkien',
		image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
		alreadyRead: true
	},
	{
		title: 'Harry Potter',
		author: 'J. K. Rowling',
		image: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
		alreadyRead: false
	}
]

let book1 = document.createElement( 'p' );
if (allBooks[ 0 ].alreadyRead)
	book1.style.color = 'red'
book1.innerHTML = `${ allBooks[ 0 ].title } written by ${ allBooks[ 0 ].author }`
let newDiv1 = document.createElement( 'div' ).appendChild(book1)
document.getElementsByClassName( 'listBooks' )[ 0 ].appendChild( newDiv1)

let book2 = document.createElement( 'p' );
if (allBooks[ 1 ].alreadyRead)
	book1.style.color = 'red'
book2.innerHTML = ( `${ allBooks[ 1 ].title } written by ${ allBooks[ 1 ].author }` )
let newDiv2 = document.createElement( 'div' ).appendChild(book2)
document.getElementsByClassName( 'listBooks' )[ 0 ].appendChild( newDiv2 )


