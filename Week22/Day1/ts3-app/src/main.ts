/** Record type */

type EmployeeT = {
  name: string;
  age: number;
  role: string;
};

let employee: EmployeeT = {
  name: 'Anne',
  age: 24,
  role: "User"
};

type keys = 'name' | 'age' | 'role';
type EmployeeR = Record<keys, string | number>;

let employeeR: EmployeeR = {
  name: 'Dan',
  age: 12,
  role: 'manager'
};

/** Generics */

const strEcho = ( value: string ): string => value;
const numEcho = ( value: number ): number => value;
const boolEcho = ( value: boolean ): boolean => value;

const echo = <T> ( value: T ): T => value;

console.log(echo([1,2]));


const getFirstElementArray = <T> ( arr: T[] ) => {
  return arr[ 0 ];
};

console.log( getFirstElementArray( [ { name: 1 }, { name: 2 } ] ) );

// Using with interface

interface Metadata {
  gender: string;
  height: 'tall' | 'short',
  favouriteNumber: number;
}

interface Person<T> {
  id: number;
  name: string;
  age: number;
  metadata: T;
}

const person1: Person<( number | string )[]> = {
  id: 1,
  name: 'John',
  age: 31,
  metadata: ['male', 'brown hair', 181]
}

const person2: Person<Metadata> = {
  id: 2,
  name: 'Anne',
  age: 24,
  metadata: {
    gender: 'Female',
    height: 'tall',
    favouriteNumber:10
  }
}

/** using in classes */

class ExampleClass<T> {
  private values: T[] = []
  constructor() {
    
  }
  
  setValues ( value: T ): void {
    this.values.push(value)
  }
  
  getValues (): T[] {
    return this.values;
  }
}

const exampleClass = new ExampleClass<number>();
exampleClass.setValues( 4 );
// exampleClass.setValues( '4' );

/** using in fuctions */

interface Users {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  Address;
  phone:    string;
  website:  string;
  company:  Company;
}

interface Address {
  street:  string;
  suite:   string;
  city:    string;
  zipcode: string;
  geo:     Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name:        string;
  catchPhrase: string;
  bs:          string;
}


interface UserI{
  id: number;
  name: string;
}

interface PostI {
  title: string;
  body: string;
}

async function fetchData<T>(url:string): Promise<T[]> {
  const response = await fetch( url );
  const data = await response.json() as T[];
  return data;
}

const users = await fetchData<UserI>( 'https://jsonplaceholder.typicode.com/users' );

// const lowerUsers: UserI[] = users.map( item => {
//   id: item.id;
//   name: item.name;
// } )


const posts = await fetchData<PostI>( 'https://jsonplaceholder.typicode.com/posts' );

// const lowerPosts: PostI[] = posts.map( item => {
//   title: item.title;
//   body: item.body;
// } )

/** passing multi generics */

// function exe<T, K> () { }
// exe<string, number>();

function mergeArray<T , K>(arr1: T[], arr2: K[]): (T|K)[] {
  return [ ...arr1, ...arr2 ];
}

const numArr: number[] = [ 1, 2, 3 ];
const strArr: string[] = [ 'a', 'b', 'c' ];

console.log(mergeArray<number,string>(numArr, strArr));

/** Utilituy types */
// Partial
type PostT = {
  id: number;
  title: string;
  body: string;
}

type PartialPost = Partial<PostT>

const post1: PostT = {
  id: 1,
  body: 'my body',
  title: 'my title'
}

const post2: PartialPost = {
  body: 'my body',
}

const updatePost = ( post: PostT, update: PartialPost ) => {
  return {...post, ...update}
}
console.log(post1);

console.log( updatePost( post1, {id:3} ));

// Pick or Omit

type MiniPost = Pick<PostT, 'id' | 'body'>

type OtherPost = Omit<PostT,'id' | 'body'>

let myMiniPost: OtherPost = {
  title: '5',
  // body: 'ttedde',
};

// Exclude or Extract

type Grade = 'A' | 'B' | 'C' | 'D' | 'E';
type PassGrade = Exclude<Grade, 'D' | 'E'>;
type FailedGrade = Extract<Grade, 'D' | 'E'>;

// NonNullable

type NullableString = string | null | undefined;
type NoNullString = NonNullable<NullableString>;

// Return type

const createUser = ( name: string, age: number, active: boolean ) => {
  return {name,age,active};
};

type UserObjectType = ReturnType<typeof createUser>;

// Parameters

type UserParams = Parameters<typeof createUser>;

const newUser: UserParams = [ 'Anne', 15, true ];
const newUser2: UserObjectType = createUser( ...newUser );
console.log(newUser2);
