

type Operation = ( a: number, b: number ) => number;

const multiply: Operation = ( a, b ) => {
  return a * b
};

const decrement: Operation = ( a, b ) => {
  return a - b
};

// default parameter

const addDefault = ( a: number, b: number = 5 ):number => {
  return a + b;
}

// optional Parameters
const addOptional = ( a: number, b?: number ): number => {
  // if(b === undefined) return a
  return a + ( b || 0 );
  // return a + b ==> not possible
};

// rest parameter
const addRest = ( a: number, ...rest: number[] ): number => {
  return rest.reduce( ( total, num ) => total + num, a );
};

//never type

const errorMessage = ( msg: string ) =>{
  throw new Error( msg );
};

// function overload
function add ( a: number, b: number ): number;
function add ( a: string, b: string ): string;
function add ( a: number | string, b: number | string ): number | string {
  // if a == 'string'==> b only can be string / same if a is number
  return 5;
}

function addNoOverload ( a: number | string, b: number | string ): number | string {
  // can a canbe number or string, and b also can be number or string without relation with 'a'
  return 5
}

// Assertion or casting
// as or < >

//aliases

type One = string;
type Two = string | number;
type Three = 'hello';

let a: One = 'abc';
// a=1
let b = a as Two;
// console.log(b);
// b=1

let c = a as Three;
console.log( c );
// c = 'hello'

let d = <One> 'hi';
let e = <Two>1
let f = <Three>'hello'

// Dom elements

const myImg1 = document.querySelector( 'img' );
// myImg1.src = '....' ==> error
// console.log( myImg1 );
if(myImg1) myImg1.src = '....'

//not null
const myImg2 = document.querySelector( 'img' )!;
myImg2.src = '....';

// as element
const myImg3 = document.querySelector( 'img' ) as HTMLImageElement;
myImg3.src = '....';

// const myImg4 = document.querySelector( '#imgone' )!;
// myImg4.src = '....'

const myImg4 = document.querySelector( '#imgone' ) as HTMLImageElement;
myImg4.src = '....'

const mySpan2 = <HTMLSpanElement> document.querySelector( '#year' );
mySpan2.textContent = '30'
const mySpan = document.querySelector( '#year' ) as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
mySpan.textContent = thisYear
mySpan ? ( mySpan.textContent = thisYear ) : null;

// classes

/**
 * access modifiers
 * public - anywhere
 * private - whithin the class
 * protected - within the class and subclass
 * readonly - set in the constructor

 */

class User {
  public name: string;
  private age: number;
  protected active: boolean;
  
  // si se definen en el contructor no hace falta declararlas this.name
  
  constructor(name: string,age: number,active: boolean ) {
    this.name = name;
    this.age = age;
    this.active = active;
  }
  
  getAge(){
   return `My Age is ${this.age}`
  }
  
  getActive (){
    return `Am I active? ${this.active}`
  }
  
  setAge ( age: number ) {
    this.age = age;
  }
  
  
}

let user1 = new User( 'John', 25, true );
console.log( user1.getAge() );
console.log( user1.getActive() );
console.log( user1.name );

class Student extends User
{
  public gender: string
  constructor( name: string, age: number, active: boolean, gender:string )
  {
    super( name, age, active );
    this.gender = gender;
  }
}

let student1 = new Student( 'Anne', 22, true, 'F' );
console.log( student1.name );
console.log( student1.getAge() );
console.log( student1.getActive() );
console.log( student1.gender );


/** Classes with interfaces / type */

interface UserI {
  name: string;
  age: number;
  active: boolean;
  getAge (): number;
}

type UserT = {
  name: string;
  age: number;
  active: boolean;
  getAge (): number;
}

type Grade = {
  grade: number
}

// let studentJohn: UserT & Grade = {
//   name: 'fff',
//   age: 34,
//   active: true, 
//   getAge()=  
// }?????????

class MyUser implements UserI {
  public _name: string;
  public _age: number;
  public _active: boolean;
  
  constructor( public name: string, public age: number, public active: boolean ){
    this._name = name;
    this._age = age;
    this._active = active
  }
  getAge (): number{
    return this._age;
  }
  
  getname(): string{
    return this._name
  }
  
  setname( name: string ): void{
    this._name = name;
  }
}

let user2 = new MyUser( 'aaa', 78, true );
console.log( user2._name );
console.log( user2._age );
console.log(user2._active);

/** index signatures / keys */

interface EmployeeI
{
  // [key:string]:string | number | boolean
  name: string;
  age: number;
  role: string;
}

let employeeJohn: EmployeeI = {
  name: 'John',
  age: 33,
  role: 'developer',
};

console.log( employeeJohn.name );
console.log( employeeJohn[ "name" ] );

// employeeJohn.email = 'www@fff.com'
// employeeJohn.active = true

// dynamic keys

const prop1: string = 'name';
// employeeJohn[prop1]

for ( let key in employeeJohn ){ // para obtener el key, value
  console.log( key, employeeJohn[ key as keyof EmployeeI ] );
  console.log(key, employeeJohn[ key as keyof typeof employeeJohn] );
}


interface StudentI
{
  name: string;
  grade: number;
  courses?: string[];
}

let student5: StudentI = {
  name: 'John',
  grade: 8,
  courses: ['Math', 'History', 'Language']
}

for ( let key in student5 )
{
  console.log(key, student5[key as keyof StudentI]);
}

Object.keys( student5 ).forEach( key => {
  console.log( key, student5[ key as keyof StudentI ] );
} )





class Car {
  constructor(
    public make: string,
    public model: string,
    public year: number,
    public isElectric: boolean
  )
  { }
  getCarDetails():string {
    return `${this.year} ${this.make} ${this.model} - Electric: ${this.isElectric}`
  }
  
  age ( currentYear: number ): number
  {
    return currentYear - this.year;
  }
  
  static compareCars ( car1: Car, car2: Car ): string
  {
    const currentYear = new Date().getFullYear();
    const ageCar1 = car1.age( currentYear );
    const ageCar2 = car2.age( currentYear );
    const message = ageCar1 > ageCar2 ? 'Car1 is older' : 'Car2 is older';
    return message
  }
}

let car1 = new Car( 'Kia', '2020', 2019, false )
console.log(car1.getCarDetails());
console.log(car1.age(2025));






// make (string) - The manufacturer of the car.
// model (string) - The model of the car.
// year (number) - The year the car was made.
// isElectric (boolean) - Whether the car is electric or not.

// Add a method getCarDetails() that returns a string in the format:

// "{year} {make} {model} - Electric: {isElectric}"
// Add a method age(currentYear: number): number 
// to calculate how old the car is based on the currentYear passed as a parameter.
// 

// Bonus Challenge
// Add a static method compareCars(car1: Car, car2: Car): string 
// to compare the ages of two cars and return which one is older










  











