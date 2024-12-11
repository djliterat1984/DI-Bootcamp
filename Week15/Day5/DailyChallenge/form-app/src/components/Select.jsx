import React from 'react'

export const Select = ( {name, title, onChange, options} ) => {
	return (
		<>
			<label className="destination-header">{title}</label><br />
			<select name={ name } id="" onChange={onChange}>
				{ options.map( (item,index) => {
					return (
						<option key={index} value={item}>{item}</option>
					)
				} ) }
			</select>
		</>
	)
}
