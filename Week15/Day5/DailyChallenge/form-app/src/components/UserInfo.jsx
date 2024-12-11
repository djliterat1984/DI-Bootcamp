import React from 'react'

export const UserInfo = ( {firstname,lastname,age,gender,destination,isNutsFree,isLactoseFree,isVegan} ) => {
	return (
		<div>
        <h2>Entered Information:</h2>
        <p>Your name: {firstname + ' ' + lastname}</p>
        <p>Your age: {age}</p>
        <p>Your gender: {gender}</p>
        <p>Your destination: {destination}</p>
        <p>Your dietary restrictions:</p>
        <div>
          <span>**Nuts free: {isNutsFree? 'Yes':'No'}</span><br />
          <span>**Lactose free: {isLactoseFree? 'Yes':'No'}</span><br />
          <span>**Vegan: {isVegan? 'Yes':'No'}</span>
        </div>
      </div>
	)
}
