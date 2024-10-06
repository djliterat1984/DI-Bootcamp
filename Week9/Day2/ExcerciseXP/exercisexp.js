// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne () {
    let a1 = 5;
    if(a1 > 1) {
        a1 = 3;
		}
	
    alert(`inside the funcOne function ${a1}`);
}

// #1.1 - run in the console:
funcOne()
// a = 3 because let a is out of the if scoupe. 

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// will throw an exception because we can't change const primitive variable

//#2
let a2 = 0;
function funcTwo() {
    a2 = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a2}`);
}

// #2.1 - run in the console:
funcThree()
// a = 0  
funcTwo()
// a = 5
funcThree()
// a = 5 after call functwo, variable a change its value.
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// a=0 or will throw an exception because we can't change const primitive variable

//#3
function funcFour() {
    window.a3 = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a3}`);
}

// #3.1 - run in the console:
funcFour()
funcFive() // a =  hello, maybe because window.<variable name> == var <variable name>

// #4
let a4 = 1;
function funcSix() {
  let a4 = "test";
	alert( `inside the funcSix function ${ a4 }` );
}


// #4.1 - run in the console:
funcSix()
// a = 'test' because it was created new variable into the function
// #4.2 What will happen if the variable is declared 
// with const instead of let ? the same result as let, because they are pointing to differents positions of memory, they are in differents scopes


//#5
const a5 = 2;
if (true) {
    let a5 = 5;
    alert(`in the if block ${a5}`); // b = 5
}
alert(`outside of the if block ${a5}`); // b = 2

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// the same result

// 🌟 Exercise 2 : Ternary operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
const winBattle = () => true
// Create a variable called experiencePoints.
let experiencePoints;
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable 
//  should be equal to 10, else the variable should be equal to 1.
experiencePoints = winBattle() ? 10 : 1
// Console.log the experiencePoints variable.
console.log(experiencePoints)

// 🌟 Exercise 3 : Is it a string ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

const isString = ( item ) => typeof ( item ) == 'string'

// Example:
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
// false


// Exercise 4 : Find the sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const totalsum = (num1,num2) => num1+num2

// 🌟 Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.

function getWeightInGrams1 ( weightKg ) {
	return weightKg * 1000
}
console.log(getWeightInGrams1(35));

// Then, use function expression and invoke it.
const getWeightInGrams2 = function ( weightKg ){
	return weightKg * 1000
}

console.log(getWeightInGrams2(35));


// Write in a one line comment, the difference between function declaration and function expression.
// the difference is that function declarations are hoisted and another thing function expression can be anonymus or named.

// Finally, use a one line arrow function and invoke it.
const getWeightInGrams3 = ( weight ) => weight * 1000

// 🌟 Exercise 6 : Fortune teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
console.log('hola1');

( function (numChildren, partnerName, geoLocation, jobTitle ){
	alert( `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numChildren } kids.` )
} )(6, 'Liby', 'Israel', 'developer');

// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking function that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
let userName = 'Diego';

( function ( name ) {
    let divName = document.createElement( 'div' );
    divName.innerHTML = name;
    let photoProfile = document.createElement( 'img' );
    photoProfile.src = './photoprofile.png'
    photoProfile.style.height = '90px'
    let nav = document.getElementById( 'navBar' )
    nav.append( divName )
    nav.append(photoProfile)
} )(userName);

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, 
// medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like 
// The client wants a < size drink > juice, containing < first ingredient >, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.