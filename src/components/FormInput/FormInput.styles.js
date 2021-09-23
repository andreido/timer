import styled from 'styled-components'

const subColor = 'white'
const mainColor = 'white'
const shrinkLabel = `
  top: 10px;
  font-size: 12px;
  color: ${mainColor};
`

export const Group = styled.div`
	position: relative;
	margin: 45px 0;
`

export const Label = styled.label`
	color: ${subColor};
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 35px;
	transition: 300ms ease all;
	${(props) => !props.isValueEmpty && shrinkLabel}
	${({ disabled }) => {
		if (disabled) {
			return `color: grey;`
		}
	}}
`

export const Input = styled.input`
	background-color: transparent;
	color: ${subColor};
	padding: 10px 10px 10px 5px;
	font-size: 1rem;
	display: block;
	border: none;
	border-bottom: 1px solid ${subColor};
	margin: 25px 0;
	width: 20rem;

	&:focus {
		outline: none;
	}

	&:focus ~ ${Label} {
		${shrinkLabel}
	}

	${({ disabled }) => {
		if (disabled) {
			return `
				color: grey;
				border-bottom: 1px solid grey;
			`
		}
	}}
`
