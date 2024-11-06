// Challenge Task: Integrating Everything

// 1.Create a file named challenge.js.

// 2.In challenge.js, require the modules from the previous tasks: greeting.js, 
//   colorful - message.js, and read - file.js.

// 3.Use the greet function to greet the user, display the colorful message, 
//   and read and display the file’s content.

// 4.Run challenge.js using Node.js and see the complete challenge in action.

import { greet } from '../task1/greeting.js'
import { greetColor } from '../task2/colorful-message.js'
import {readFile} from '../task3/read-file.js'

greet( 'Diego' )
console.log( greetColor() )
readFile('../task3/files/file-data.txt')