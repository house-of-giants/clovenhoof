import React from 'react'
import styled from 'styled-components'
import { white, black } from '../../styles/base/variables'

const StyledButton = styled.button`
	background-color: transparent;
	border: 2px solid ${white};
	color: ${white};
	cursor: pointer;
	font-size: 1.875rem;
	font-weight: 700;
	line-height: 1;
	margin-bottom: 1.875rem;
	padding: 0.875rem 1.875rem;
	transition: 200ms ease background-color, 200ms ease color;

	&:hover {
		background-color: ${white};
		color: ${black};
	}
`

export default StyledButton