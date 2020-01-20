import styled from 'styled-components'
import { white, black } from '../../styles/base/variables'

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

export default StyledButton