import React from 'react'
import StyledButton from './StyledButton'

const Button = ({children, onClick}) => (
	<StyledButton onClick={onClick}>{children}</StyledButton>
)

export default Button