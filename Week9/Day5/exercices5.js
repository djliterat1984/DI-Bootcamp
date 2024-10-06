let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

let keys = Object.keys( myObj );
console.log( keys );
let values = Object.values( myObj )
console.log( values );
console.log( Object.entries( myObj ));
console.log( `The x# key is : ${ keys.length } The x# value is : ${ values.length }` );

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// We define 3 local variables: name, maths, science
// Default value to the variable science, in case the key doesn't exist in the object student
const { name, scores: {maths, science = 50} } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);
// John Doe scored 74 in Maths and 50 in Elementary Science.

const student2 = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

// Without Destructuring
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}

// With Destructuring
function displaySummary({name, scores: { maths = 0, english = 0, science = 0 }}) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

displaySummary( student );

let myCar = {
  color : 'blue',
  details : {
    plateNumber: 123,
    name : "Ford"
  }
}

let myNewCar = {...myCar}
console.log("myNewCar : ", myNewCar) 
// myNewCar :  
// { 
//      color: 'blue', 
//      details: { plateNumber: 123, name: 'Ford' } 
// }

// SHALLOW COPYING
myCar.color = "red"
console.log("myNewCar.color :", myNewCar.color)
// myNewCar.color : blue -- UNCHANGED
console.log("myCar.color :", myCar.color)
// myCar.color : red -- CHANGED

// DEEP COPYING
myNewCar.details.name = 'Chevrolet'
console.log("myNewCar.details.name :", myNewCar.details.name)
// myNewCar.details.plateNumber : 345 -- CHANGED
console.log("myCar.details.name :", myCar.details.name)
// myCar.details.plateNumber : 345 : red -- CHANGED
 