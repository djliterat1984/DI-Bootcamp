// Instructions
// Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// 1.Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => {
    console.log(groceries.fruits);
}

displayGroceries()
 
// 2.Create another arrow function named cloneGroceries.
    //    1.In the function, create a variable named user that is a copy of the client variable.
    //      ( Tip : make the user variable equal to the client variable )
// 		  2.Change the client variable to “Betty”. Will we also see this modification in the user 
//          variable ? Why ? NO, BECAUSE THIS IS A VALUE MODIFICATION, AND EACH VARIABLE POINT TO ANOTHER VALUE OF MEMORY.
// 		In the function, create a variable named shopping that is equal to the groceries variable.
    // 				Change the value of the totalPrice key to 35$. Will we also see this modification
                    // in the shopping object ? Why ? YES, BECAUSE THIS IS A REFERENCE MODIFICATION, AND BOTH VARIABLES POINT TO THE SAME MEMORY ADDRESS.
    // 				Change the value of the paid key to false. Will we also see this modification
    //              in the shopping object ? Why ? YES, BECAUSE THIS IS A REFERENCE MODIFICATION, AND BOTH VARIABLES POINT TO THE SAME MEMORY ADDRESS.

const cloneGroceries = () => {
    let user = client
    client = 'Betty'
    let shopping = groceries
    console.log(groceries);
    
    groceries.totalPrice = '35$'
    groceries.other.paid = false;
    
    console.log( user );
    console.log( shopping );
}

// 3.Invoke the cloneGroceries function.

cloneGroceries()