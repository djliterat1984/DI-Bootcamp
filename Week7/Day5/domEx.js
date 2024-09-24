// // For each of the questions, find 2 WAYS of accessing :

// // 1. The div DOM node?

// // 2. The ul DOM node?

// // 3. The second li (with Pete)?

// const domNode1 = document.body.firstElementChild;
// const domNode2 = document.body.children[ 0 ]

// const domNode4 = document.body.firstElementChild.nextElementSibling;
// const domNode3 = document.body.children[ 1 ]

// const domNode6 = document.body.firstElementChild.nextElementSibling.lastElementChild;
// const domNode5 = document.body.children[ 1 ].children[ 1 ];

// console.log(domNode1);
// console.log(domNode2);
// console.log(domNode3);
// console.log(domNode4);
// console.log(domNode5);
// console.log(domNode6);

// let newDiv = document.createElement( 'div' )
// let newTextNode = document.createTextNode( 'Here I am' );


// {/* <html>
// <body>
//   <div id="container">Users:</div>
//   <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
//   <ul class="list">
//     <li>Sarah</li>
//     <li>Dan</li>
//   </ul>
// </body>
// </html> */}

// // For each of the questions, find 2 WAYS to access :

// // 1. The div node

// document.getElementsById( 'container' ) 
// document.querySelector('div#container')


// // 2. The ul nodes, and render all of it's children one by one

// const elems = document.getElementsByClassName( 'list' )

// for ( let ul of elems ){
// 	for ( let li of ul.children )
// 		console.log(li.textContent);	
// }


// // 3. The first li of each ul

// const query = document.querySelectorAll( 'ul.list >li:first-child' )
// for (li of query)
// 	li.textContent


// const ulElem = document.getElementsByTagName( 'ul ')
// const liElem = document.getElementsByTagName( 'li ')[0]
// console.log( liElem.textContent);


// {/* <html>
// <body> 
//     <p>
//         <a id="dI" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://developers.institute/">Developers Institute</a>
//     </p> 
// </body>
// </html> 
// Write variables to get the value of the attributes of the specified link : */}

// // href
// // hreflang
// // rel
// // target
// // type