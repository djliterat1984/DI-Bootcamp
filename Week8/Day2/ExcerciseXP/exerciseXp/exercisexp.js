// Exercise 1 : Change the article
// Instructions
// Copy the code below, into a structured HTML file:

{/* <article>
    <h1> Some Facts </h1>
    <h2> The Chocolate </h2>
    <h3> History of the chocolate </h3>
    <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
    Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p> After the European discovery of the Americas, chocolate became 
    very popular in the wider world, and its demand exploded. </p>
    <p> Chocolate has since become a popular food product that millions enjoy every day, 
    thanks to its unique, rich, and sweet taste.</p> 
    <p> But what effect does eating chocolate have on our health?</p> 
</article> */}


// 1.Using a DOM property, retrieve the h1 and console.log it.

let h1Item = document.getElementsByTagName( 'h1' )[ 0 ]
console.log(h1Item);


// 2.Using DOM methods, remove the last paragraph in the <article> tag.

let article = document.getElementsByTagName( 'article' )[0]
let articleLength = article.children.length
article.children[ articleLength - 1 ].remove()


// 3.Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2Item = document.getElementsByTagName( 'h2' )[ 0 ]
h2Item.addEventListener( 'click', () => {
	let bc = h2Item.style.backgroundColor;
	if(bc == 'red')
		h2Item.style.backgroundColor = 'white'
	else
		h2Item.style.backgroundColor = 'red'
} )

// 4.Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3Item = document.getElementsByTagName( 'h3' )[ 0 ]
h3Item.addEventListener( 'click', () => h3Item.style.display = 'none' )

// 5.Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let boldBtn = document.getElementById( 'boldBtn' )
boldBtn.addEventListener( 'click', () => {
	let articleItems = article.children
	for (let i = 0; i < articleItems.length; i++)
		articleItems[i].style.fontWeight = 'bold'	
} )

// 6.BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1Item.addEventListener( 'mouseover', () => {
	let fontSize = Math.random() * 100
	h1Item.style.fontSize = `${fontSize}px`
} )

// 7.BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let paragraphItems = document.getElementsByTagName( 'p' )
let secondParag = paragraphItems[ 1 ]
secondParag.addEventListener( 'mouseover', () => {
	if(secondParag.style.opacity == '0')
		secondParag.style.opacity = '100%'
	else
		secondParag.style.opacity = '0%'
	secondParag.style.transition = 'opacity 1s'
} )


// 🌟 Exercise 2 : Work with forms
// Instructions
// Copy the code below, into a structured HTML file:

{/* <form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="firstname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lastname"><br><br>
  <input type="submit" value="Submit" id="submit">
</form> 
<ul class="usersAnswer"></ul> */}


// 1.Retrieve the form and console.log it.

let form = document.getElementsByTagName( 'form' )[ 0 ]
console.log(form);

// 2.Retrieve the inputs by their id and console.log them.

let fnameInput = document.getElementById( 'fname' )
console.log(fnameInput);

let lnameInput = document.getElementById( 'lname' )
console.log(lnameInput);

let submitInput = document.getElementById( 'submit' )
console.log(submitInput);


// 3.Retrieve the inputs by their name attribute and console.log them.
console.log(document.getElementsByName('firstname')[0]);
console.log( document.getElementsByName( 'lastname' )[ 0 ] );  

// 4.When the user submits the form (ie. submit event listener)
		// use event.preventDefault(), why ?
		// BECAUSE THIS PREVENT TO SEND AUTOMATICALLY THE FORM TO THE SERVER AND REFRESH THE PAGE, IT IS POSSIBLE TO CHECK THE INFO, AND HANDLE ERRORS
submitInput.addEventListener('click',(event) => {event.preventDefault()})

		// get the values of the input tags,
let inputsItems = document.getElementsByTagName( 'input' )
for ( let i = 0; i < inputsItems.length; i++ ) {
	let value = inputsItems[ i ].value
	value.length > 0 && console.log( value );
	if ( value != 'Submit' ) {
		let liValue = document.createElement( 'li' )
		liValue.textContent = value
		
		let ulContainer = document.getElementsByClassName( 'usersAnswer' )[ 0 ];
		ulContainer.append(liValue)
	}
}
		// make sure that they are not empty,
		// create an li per input value,



		// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


// Exercise 3 : Transform the sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

{/* <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
<strong>end</strong> you <strong>will</strong> be great Developers!
<strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p> */}


// In the JS file:

// 1.Declare a global variable named allBoldItems.

let allBoldItems;

// 2.Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

const getBoldItems = () => {
	let boldItems = document.getElementsByTagName( 'strong' )
	allBoldItems = []
	for ( let i = 0; i < boldItems.length; i++ ) {
		allBoldItems.push(boldItems[i])	
	}
	console.log(allBoldItems);
}

getBoldItems()
// 3.Create a function called highlight() that changes the color of all the bold text to blue.

const highlight = () => {
	allBoldItems.forEach(element => {
		element.style.color = 'blue'
	});
}

// 4.Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

const returnItemsToDefault = () => {
	allBoldItems.forEach( element => {
		element.style.color = 'black'
	});}

// 5.Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let parag = document.getElementById( 'pg' )
parag.addEventListener( 'mouseover', () => highlight() )
parag.addEventListener('mouseout', () => returnItemsToDefault())
