import React from 'react'
import StyledButton from './StyledButton'

const Button = ({children, onClick, href}) => (
	<StyledButton onClick={onClick} href={href}>{children}</StyledButton>
)

export default Button