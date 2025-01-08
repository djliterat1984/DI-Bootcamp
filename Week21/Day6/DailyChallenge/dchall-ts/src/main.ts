// Instructions:
// 1. Define the following types:

type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};


// 2. Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:

// For User objects, return a greeting message with the user’s name and age.
// For Product objects, return a message with the product ID and its price.
// For Order objects, return a summary of the order with its ID and amount.

function handleData ( data: ( User | Product | Order )[] ): string[] {
	return data.map( item => {
		if ( item.type === 'user' )
			return `Hi ${ item.name }, you are ${ item.age } years old`;
		else if ( item.type === 'product' )
			return `Product ID: ${ item.id } - Price: ${ item.price }`;
		else if ( item.type === 'order' )
			return `Order ID: ${ item.orderId } - Amount: ${ item.amount }`;
		else
			return 'Unknown data type';
	})
}

// 3. Ensure your function handles unexpected cases gracefully.

const data: (User | Product | Order)[] = [
  { type: 'user', name: 'Alice', age: 30 },
  { type: 'product', id: 101, price: 29.99 },
  { type: 'order', orderId: 'A123', amount: 199.99 }
];

console.log(handleData(data));