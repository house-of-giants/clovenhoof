import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import { colors, mq } from '../../styles/base/variables'

const StyledHeader = styled.div`
	padding: 0;
	position: relative;
	z-index: 2;

	@media (${mq.bpLarge}) {
		padding: 3.75rem 0;
	}

	& nav {
		border-bottom: 1px solid ${colors.secondary};
		
		@media (${mq.bpLarge}) {
			width: 40vw;
		}
	}

	& svg {
		margin: 0 auto;
		max-width: 300px;
	}
`

const Header = () => (
	<StyledHeader>
		<Helmet>
			<link href="https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap" rel="stylesheet" />
		</Helmet>
		<Logo />
		<Navigation />
	</StyledHeader>
)

export default Header