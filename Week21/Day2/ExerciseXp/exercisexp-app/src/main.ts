// Exercise 1: Hello, World! Program
// What You Will Learn:

// How to create a simple TypeScript program.
// How to define and log variables of different types.
// Instructions
// Create a TypeScript program that logs the message “Hello, World!” to the console.

const hello = (text:string): void => {
  console.log(text);
}

hello('Hello, World!')

// 🌟 Exercise 2: Type Annotations
// What You Will Learn:

// How to use type annotations in TypeScript.
// How to define and log variables with specified types.
// Instructions
// Define a variable age of type number and a variable name of type string, and log them to the console.

let age: number = 15;
let name: string = 'John';
console.log( age );
console.log(name);

// 🌟 Exercise 3: Union Types
// What You Will Learn:

// How to use union types in TypeScript.
// How to define variables that can hold either a string or a number.
// Description: Use union types to declare a variable that can hold either a string or a number.

// Instructions
// Use union types to declare a variable id that can be either a string or a number.

let id: string | number;

// 🌟 Exercise 4: Control Flow with if...else
// What You Will Learn:

// How to use if...else statements to control program flow.
// How to handle different conditions using if...else statements.
// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

const posOrNeg = (num:number): string => {
  if ( num > 0 )
    return 'Positive';
  else if ( num < 0 )
    return 'Negative'
  else
    return 'Zero'
}

// 🌟 Exercise 5: Tuple Types
// What You Will Learn:

// How to use tuple types in TypeScript.
// How to define functions that return multiple values of different types.
// Instructions
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types

const getDetails = ( name: string, age: number ): [string,number,string] => {
  return [name, age, `Hello, ${name}! You are ${age} years old`]
}

// Call the function and log the tuple
const details = getDetails("Alice", 25);
// Expected output
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']

// 🌟 Exercise 6: Object Type Annotations
// What You Will Learn:

// How to define the structure of an object using TypeScript’s type annotations.
// How to create and return an object with specific properties.
// Instructions
// 1.Define the Object Structure:
// 2.Create an object type annotation that defines the shape of a Person object. 
//   The object should have two properties: name( a string ) and age( a number ).
// 3.Create the Function:
// 4.Write a function named createPerson that takes two parameters: name (string) and age (number).
// 5.The function should return an object that matches the Person structure.
// 6.Test the Function:
// 7.Test the createPerson function by creating a person and logging the result to the console.
type PersonT = {
  name: string,
  age:number
}

const createPerson = ( name: string, age: number ): PersonT => {
  return {name,age}
}

const person1 = createPerson( 'John', 25 );
console.log(person1);


// 🌟 Exercise 7: Type Assertions
// What You Will Learn:

// How to use type assertions in TypeScript to cast an element to a specific type.
// How to access and manipulate properties of an HTML element after casting.
// Description:

// In this exercise, you’ll learn how to use type assertions to cast an HTML element to a specific type in TypeScript. This allows you to safely access and manipulate properties of the element.

// Instructions
// 1.Get an Element from the DOM:
// 2.Use document.getElementById() to retrieve an HTML element from the DOM.

// 3.Use Type Assertion:

// 4.Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.

// 5.Access the Element’s Properties:

// 6.Once cast, use the properties of the specific element type, like setting the value of an input element.

// 7.Test the Functionality:

// 8.Ensure that you can successfully set or manipulate a property of the element.

// Additional Notes:

// Type assertions are a powerful way to let TypeScript know more about the type of an element 
// when you’re certain of it. However, you should use them cautiously, as incorrect assertions 
// can lead to runtime errors if the type is not as expected.

const myApp = document.getElementById( 'inputBtn' ) as HTMLInputElement;

myApp.value = 'Test Exercise'
myApp.style.backgroundColor = 'red'
myApp.style.color = 'white'

// 🌟 Exercise 8: switch Statement with Complex Conditions
// What You Will Learn:

// How to use a switch statement in TypeScript.
// How to handle multiple conditions using complex cases in a switch statement.
// Instructions
// Create a function getAction that takes a string representing a user role and returns an action 
// for the user.Use a switch statement with complex conditions to handle multiple roles.

const getAction = (role:string):string => {
  switch (role) {
    case 'admin':
      return 'Manage users and settings'
    case 'editor':
      return 'Edit content'
    case 'viewer':
      return 'View content'
    case 'guest':
      return 'Limited access'
    default:
      return 'Inavlid role';
  }
}

// Test the function with different roles
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role


// 🌟 Exercise 9: Function Overloading with Default Parameters
// What You Will Learn:

// How to use function overloading in TypeScript.
// How to create overloaded functions with default parameters.
// Instructions
// Create an overloaded function greet that can either take a name and greet the person, 
// or take no arguments and return a default greeting.

function greet ( name: string ): string;
function greet (): string;
function greet ( name?: string): string {
  if ( name )
    return `Hello ${ name }! You are the best!!!`
  
  return 'Hi, nice to see you!'
}

console.log(greet());
console.log(greet( 'John' ));


