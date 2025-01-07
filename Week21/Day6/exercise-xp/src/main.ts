// 🌟 Exercise 1: Intersection Types
// What You Will Learn:
// Combine multiple types into one.
// Create a type that includes all properties from several types.
// Task
// Define an intersection type PersonWithAddress that combines Person and Address types. 
// Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city,

type Person = {
  name: string;
  age: number;
}

type Address = {
  street: string;
  city: string;
}

type PersonWithAddress = Person | Address;

let person1: PersonWithAddress = {
  name: 'John',
  age: 35,
  street: 'street 1',
  city: 'Ramat Gan'
}


// 🌟 Exercise 2: Type Guards with Union Types
// What You Will Learn
// Use type guards to handle different types.
// Perform actions based on the input type.
// Task
// Create a function describeValue that accepts number | string. 
// Use type guards to return a description based on the input type:

// "This is a number" for numbers.
// "This is a string" for strings.

function describeValue(value: string | number):string {
  if (typeof value === "number")
    return "This is a number";
  
  return "This is a string";
}

// 🌟 Exercise 3: Type Casting
// What You Will Learn
// Convert a variable from one type to another using type casting.
// Understand the difference between type casting and type assertions.
// Task
// Create a variable someValue of type any and cast it to a string. Then, use it as a string.

let someValue: any;
let strValue = someValue as string;
strValue = '45';

// 🌟 Exercise 4: Type Assertions with Union Types
// What You Will Learn
// Use type assertions to specify a type.
// Handle variables with union types.
// Task
// Create a function getFirstElement that takes an array of number | string and uses type assertions 
// to return the first element as a string.Test with arrays of mixed types.

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(["hello", 42])); // Output: "hello"
console.log(getFirstElement([50, "hello", 42])); // Output: "hello"

// 🌟 Exercise 5: Generic Constraints
// What You Will Learn
// Use generic constraints to limit type usage.
// Create a generic function that works with constrained types.
// Task
// Create a generic function logLength that takes a parameter of type T constrained to types 
// with a length property( like string or Array ).The function should log the length.

function logLength<T extends string | any[]>(value:T) {
	console.log(value.length);
}

logLength( [ true, false ] )
logLength([1,2,3,4])
logLength( [ 'a', 'b', 'c' ] )
logLength( 'value' );
logLength([1,2,3,'5'])

// 🌟 Exercise 6: Intersection Types and Type Guards
// What You Will Learn
// Combine types using intersection types.
// Use type guards to handle complex types safely.
// Task
// Define a type Employee that combines Person and Job using intersection types. Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

type Person2T = {
	name: string;
	age: number;
}

type JobT = {
	position: string;
	department: string;
}

type EmployeeT = Person2T & JobT;

function isManager( employee:EmployeeT ):employee is EmployeeT & {position:"Manager"} {
	return employee.position === "Manager";
}

function isDeveloper ( employee: EmployeeT ): employee is EmployeeT & { position: 'Developer' }{
	return employee.position === 'Developer';
}

function describeEmployee(employee:EmployeeT): string {
	if ( isDeveloper( employee ) )
		return 'Is developer';
	else if ( isManager( employee ) )
		return "Is Manager"
	else
		return 'Unknown'
}

const employee1: EmployeeT = { name: 'John', age: 47, position: 'Developer', department: 'I&D' }
const employee2: EmployeeT = { name: 'Anne', age: 42, position: 'Manager', department: 'I&D' }

console.log(describeEmployee(employee1));
console.log(describeEmployee(employee2));

// 🌟 Exercise 7: Type Assertions and Generic Constraints
// What You Will Learn
// Use type assertions to refine types in complex scenarios.
// Apply generic constraints to ensure type safety.
// Task
// Create a generic function formatInput that takes a parameter of type T constrained to have a 
// toString() method.Use type assertions to ensure the parameter is treated as a string for formatting.
// The function should format the input as a string.

function formatInput<T extends { toString (): string; }> ( value: T ) {
	return value.toString();
}

console.log( formatInput( 123 ) );
console.log( formatInput( true ) );
console.log( formatInput( {name: 'jjjj', age: 56} ));



