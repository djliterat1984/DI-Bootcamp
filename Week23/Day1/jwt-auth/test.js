const jwt = require( 'jsonwebtoken' );

/**
* jwt.sign(
*	payload // {}
*	token-secret-code
*	{expire time}
*)
*/

/** expiresIn:
('2 days')  // 172800000
('1d')   // 86400000
('10h')  // 36000000
('2.5 hrs') // 9000000
('2h')      // 7200000
('1m')      // 60000
('5s')      // 5000
('1y')      // 31557600000
('-3 days') // -259200000
('-1h')     // -3600000
*/

const expiresTime = Math.floor( Date.now() / 1000 ) + 15 * 60 // 15 min
console.log(expiresTime);

const myToken = jwt.sign(
	{ userId: 123, name: 'abc' },
	'123456',
	{
		expiresIn: '60s'
	}
)

console.log( myToken );

const expiredToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6ImFiYyIsImlhdCI6MTczNjg3MjU1MiwiZXhwIjoxNzM2ODcyNjEyfQ.BKzaqfWMxbWzT2IAH1NDeTYd_pKxNORr2fqP6NB1swg'

/**
 * jwt.verify(
 *	token,
 *  secret,
 *  (err,decode => {})
 * )
 */

jwt.verify(
	expiredToken,
	'123456',
	( err, decode ) => {
		if ( err )
			console.log( err.message );
		
		console.log(decode);
	}
)
