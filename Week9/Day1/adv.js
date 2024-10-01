function checkYear(year) {
	return year > 2000 
		? 'You are in the 21st century'
		: 'You live in the Middle Age'	
}

console.log( checkYear( 2001 ) );
console.log(checkYear(1999));

var num = 8;
var num = 10;

console.log( num );

// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young.";
//   } else {
//     const message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log( checkAge( 21 ) );

// function numbers() {
//   for (let i = 0; i < 5; i += 1) {
//     console.log(i);
//   }
//     console.log(i);
// }
// numbers();

const calculator = ( a, b, operator ) => {
	operator === '+' ?
		a + b
		: operator === '-' ?
			a - b
			: operator === '*' ?
				a * b
				: a/b
}

let add = (function () {
  let counter = 0;
  function calculus() {
      counter += 1; 
      return counter
  }
  return calculus
})();

console.log(add());
console.log( add() );
console.log( add() );

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);// 15
console.log(object3.value);// 10