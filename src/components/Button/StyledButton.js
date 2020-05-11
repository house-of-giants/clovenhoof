import styled from 'styled-components'
import { white, black, red } from '../../styles/base/variables'

const StyledButton = styled.button`
	background-color: transparent;
	border: 2px solid ${white};
	color: ${white};
	cursor: pointer;
	font-size: 1rem;
	font-weight: 700;
	line-height: 1;
	padding: 0.6rem 1.875rem;
	transition: 200ms ease background-color, 200ms ease color;

	&:hover {
		background-color: ${white};
		color: ${black};
	}
`
export const StyledButtonLink = styled.a`
	background-color: transparent;
	border: 2px solid ${red};
	color: ${red};
	cursor: pointer;
	display: block;
	font-size: 1rem;
	font-weight: 700;
	line-height: 1;
	margin: 0 auto;
	max-width: 150px;
	padding: 1.6rem 2.875rem;
	text-align: center;
	transition: 200ms ease background-color, 200ms ease color;

	&:hover {
		background-color: ${red};
		color: ${white};
		text-decoration: none;
	}
`

export default StyledButton