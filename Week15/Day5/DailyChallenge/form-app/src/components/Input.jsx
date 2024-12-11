import React from 'react'

const Input = ( props ) => {
	const { name, placeholder, onChange } = props;
	return (
		 <input type="text" name={name} placeholder={placeholder} onChange={onChange} />
	)
}

export default Input