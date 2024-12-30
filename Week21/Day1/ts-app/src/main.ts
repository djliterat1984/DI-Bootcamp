// type number

let num: number = 1;
console.log( num );
num = 2;
console.log( num );

// type string
let str: string = 'John';
str = 'Anne'
console.log(str);


// type boolean

let bool: boolean = true;
bool = false
console.log(bool);


// type any
let anytype: any;
anytype = 5
anytype = 'rut'
anytype = [ 1, 2, 3 ]
console.log(anytype);


// union type
let numstr: number | string;
numstr = 1;
numstr = 'tttt';
console.log(numstr);


// type RegExp
let reg: RegExp = /\w+/g
console.log(reg);


// type array
let strArray: string[];
strArray = [];
strArray.push('abc')

let numArray: number[] = [];
numArray.push( 1 );

let mixArr: ( number | string | boolean | null | undefined )[] = [ 1, 2, 'rrrr', true ]
mixArr.push(null)
mixArr.push(undefined)

// type Tuple => defines the order of the arguments.
let myTuple: [ string, number, string ];
myTuple = [ 'r', 5, 'y' ];
console.log(myTuple);


// type object ==> can be array, function, etc, because all in JS is an object;
let myObject: object = {};
myObject = []
console.log(myObject);


const user = {
  name: 'John',
  age: 25
};

console.log(user);

user.name = 'Anne';
console.log( user );
// user.email = 'aaa@gamil.com' //Property 'email' does not exist on type '{ name: string; age: number; }'

// type / interface

type myString = string;

type strnum = string | number;


type UserT = {
  name: myString;
  age: number;
  email: string | null;
  // optional property ==> add '?' symbol
  gender?: strnum
}

interface UserI {
  name: myString;
  age: number;
  email: string | null;
  // optional property ==> add '?' symbol
  gender?: string | number 
}

let user1: UserI = {
  name: 'dan',
  age: 39,
  email: null,
  gender: 1
}

console.log(user1);


let user2: UserT = {
  name: 'anne',
  age: 25,
  email: 'aaa@gmail.com',
}

console.log(user2);


// type Enum

enum Grade {
  A,
  B,
  C,
  D,
  E
}

console.log( Grade );
console.log(Grade[1], Grade.D);

// type literal

type Statuses = 'loading' | 'Success' | 'Failed'
let fectchStatus: Statuses = 'Failed'
console.log( fectchStatus );

// type Aliases

type StringOrNumber = string | number;
let strnum: StringOrNumber = '1';
type BooleanOrStrNum = StringOrNumber | boolean;
let boolOrStrNum: BooleanOrStrNum = true;
console.log( boolOrStrNum );

type Student = {
  name: string;
  grade: Grade;
  status: Statuses;
  classes: StringOrNumber
}

let student1: Student = {
  name: 'John',
  grade: Grade.C,
  status: 'Success',
  classes: 1
};

// extend the Student type to a new type with age:number

type StudentWithAge = Student & {
  age: number;
}

// function

const sum = ( a:number, b:number ): number => {
  return a + b
}

sum( 1, 2 )


const sumOrConcat = ( a: number, b: StringOrNumber ):StringOrNumber => {
  if ( typeof b  === 'string' )
    return a + b + '';
  
  return a + b
};

console.log( sumOrConcat( 1, 2 ) );
console.log( sumOrConcat( 1, '2' ) );



