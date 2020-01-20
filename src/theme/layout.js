import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import globalStyles from '../styles/styles'
import Hero from '../components/Header/Hero'

import { containerWidth } from '../styles/base/variables'

const StyledMain = styled.main`
	margin: 0 auto;
	max-width: ${containerWidth};
	padding: 0 1.875rem;
`

const GlobalStyle = createGlobalStyle`
	${globalStyles}
`

const Layout = ({ children }) => (
	<div className='app'>
		<GlobalStyle />
		<Hero />
		<StyledMain>
			{children}
		</StyledMain>
	</div>
)

export default Layout
