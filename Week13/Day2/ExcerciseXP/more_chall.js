// Exercise 1 : File Management and Path Manipulation
// Instructions
// Create a directory named file-management.

// Inside the file-management directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Create a directory named data inside the file-management directory.

// Inside the data directory, create a file named example.txt and add some content to it.

// Create a file named file-info.js inside the file-management directory.

// In file-info.js, require the path and fs modules and implement the following functionality:
// Use the path.join function to create a file path to the example.txt file within the data directory.
// Use the fs.existsSync function to check if the file exists.
// Use the fs.statSync function to get information about the file, such as size and creation time.
// Display the file’s existence, size, and creation time in the terminal.

// Create another file named app.js in the same directory.

// In app.js, require the file-info.js module and call the function you’ve written to display information about the file.

// Run app.js using Node.js and verify that the file’s existence, size, and creation time are displayed in the terminal.


// Exercise 2 : Fetching and Displaying Data with Axios
// Instructions
// Create a directory named axios-example.

// Inside the axios-example directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the axios package by running npm install axios in the terminal.

// Create a file named fetch-data.js inside the axios-example directory.

// In fetch-data.js, require the axios package and use it to make an HTTP GET request to a JSON placeholder API (e.g., https://jsonplaceholder.typicode.com/posts) and fetch a list of posts.

// Display the title of each post in the terminal.

// Create another file named app.js in the same directory.

// In app.js, require the fetch-data.js module and call the function you’ve written to fetch and display the post titles.

// Run app.js using Node.js and verify that the post titles are displayed in the terminal.


// Exercise 3 : Working with Dates Using the date-fns Module
// Instructions
// Create a directory named date-fns-usage.

// Inside the date-fns-usage directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the date-fns package by running npm install date-fns in the terminal. date-fns is a library for working with dates and times.

// Create a file named date-operations.js inside the date-fns-usage directory.

// In date-operations.js, require the date-fns package and perform the following operations:
// Get the current date and time.
// Add 5 days to the current date.
// Format the resulting date as a string.
// Display the formatted date in the terminal.

// Create a file named app.js in the same directory.

// In app.js, require the date-operations.js module and call the function you’ve written to perform and display the date operations.

// Run app.js using Node.js and verify that the formatted date is displayed in the terminal.


// Exercise 4 : Faker Module
// Instructions
// Install the faker module, and read the documentation.

// Create an empty array called users. Tip: It’s an array of objects

// Create a function that adds objects to the users array. Each user has the properties: name, address street and country. Use faker to populate them with fake data.

// Bonus : Find a node module that allows to prompt the user for his name, address street and country in order to add this information into the users array.


// Exercise 5 : Regular Expression #1
// Instructions
// Use the regular expression module to extract numbers from a string
// Example

// returnNumbers('k5k3q2g5z6x9bn') 
// // Excepted output : 532569


// Exercise 6 : Regular Expression #2
// Instructions
// Ask the user for his full name (example: “John Doe”), and use the regular expression module to check the validity of his answer:
// The name should contain only letters.
// The name should contain only one space.
// The first letter of each name should be upper cased.