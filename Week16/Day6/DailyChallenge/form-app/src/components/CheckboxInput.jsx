import React from 'react'

const CheckboxInput = ({detail, checked, onChange, name, value}) => {
	return (
		<label>
			<input
				style={ { color: 'white' } }
				checked={ checked }
				onChange={ onChange }
				type="checkbox"
				name={ name }
				value={value}
			/>
			{detail}
		</label>
	)
}

export default CheckboxInput