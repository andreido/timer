import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const TimerContainer = styled.span`
	border: 1px solid white;
	border-radius: 10px;
	padding: 15px;
	position: relative;
	top: 1.5rem;
`

export const Button = styled.button`
	border: none;
	height: 2rem;
	padding: 0 2rem;
	margin: 1rem;
	border-radius: 0.6rem;
	color: white;
	background-color: #2e3845;
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.7rem;
	text-align: center;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	${({ disableHover }) => {
		if (!disableHover) {
			return `&:hover {
				background-color: #008CF6;
			}`
		}
	}}
`
