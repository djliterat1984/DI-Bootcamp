// Exercise 1 : Promise.all()
// Instructions
// 1.Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
// Explain in a comment how Promise.all work and why you receive this output.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

const resolveAllPromises = () => {
	try {
		Promise.all( [ promise1, promise2, promise3 ] )
			.then( result => console.log( result ))
			.catch(error => console.log(error)
		)
	} catch (error) {
		console.log(error);
	}
} 

resolveAllPromises()

//==================================================
// Promise.all attempts to resolve all promises added by arguments, if any of them are rejected, the execution 
// of the promise.all stops. this method returns a new promise and the result is a new array with the result of 
// all promises.

//====================================================

// Exercise 2 : Analyse Promise.all()
// Instructions
// Analyse the code below - what will be the output ?

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
	} );

// [2,4,6]