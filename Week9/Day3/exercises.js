const numbers = [ 10, 11, 12, 15, 20 ];

numbers.forEach( ( number) => {
	if ( number % 2 == 0 )
		console.log(number);	
} )

const words = [ "wow", "hey", "bye" ];
const starstWithH = words.some( value => {
	value.startsWith( 'h' )
} )
console.log( starstWithH );

const words2 = [ "hello", "hey", "hola" ];

const allStartWithH = words2.every( value => value.startsWith( 'h' ) )
console.log( allStartWithH );

myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
} );

console.log( newArr );

let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]

let partySum = party.reduce( ( acc, value) => {
	 return value.desert != 'Apple Pie' ? acc + value.calories : 0 + acc
},0)

console.log(partySum);

