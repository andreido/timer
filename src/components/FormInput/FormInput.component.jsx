import React from 'react'
import { Group, Input, Label } from './FormInput.styles'

const FormInput = ({ label, ...otherProps }) => (
	<Group>
		<Input id={otherProps.id || otherProps.name} {...otherProps} />
		{label && (
			<Label htmlFor={otherProps.id} isValueEmpty={!otherProps.value.length}>
				{label}
			</Label>
		)}
	</Group>
)

export default FormInput
