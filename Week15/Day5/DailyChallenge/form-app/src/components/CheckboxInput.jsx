import React from 'react'

const CheckboxInput = ({detail, checked, onChange, name}) => {
	return (
		<label>
			<input
				style={ { color: 'white' } }
				checked={ checked }
				onChange={ onChange }
				type="checkbox"
				name={ name }
			/>
			{detail}
		</label>
	)
}

export default CheckboxInput