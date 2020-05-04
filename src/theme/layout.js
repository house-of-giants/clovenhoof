import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import globalStyles from '../styles/styles'

import { containerWidth } from '../styles/base/variables'
import Helmet from 'react-helmet'
import Navigation from '../components/Navigation/Navigation'

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
		<Helmet>
			<link href="https://fonts.googleapis.com/css?family=Chivo:300,400|UnifrakturMaguntia&display=swap" rel="stylesheet" />
			<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.0' viewBox='0 0 2819 2736' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cstyle%3E path %7B fill: black; %7D @media (prefers-color-scheme: dark) %7B path %7B fill: white; %7D %7D %3C/style%3E%3Cpath class='fil0' d='M2620 2135c0-122-44-218-109-285-76-77-180-118-283-118-274 0-565 275-685 403 120 127 411 402 685 402 103 0 207-41 283-117 65-68 109-163 109-285zm-1310-245v-664H815c-403 0-240 166-403 166V860c163 0 0 166 403 166h495V660H993c-403 0-240 166-403 166V295c163 0 0 166 403 166h317v-59c0-402-166-239-166-402h531c0 163-166 0-166 402v59h326c402 0 240-166 402-166v531c-162 0 0-166-402-166h-326v366h504c402 0 240-166 402-166v532c-162 0 0-166-402-166h-504v664c171-156 444-357 719-357 154 0 311 61 425 178 100 102 166 245 166 424 0 178-66 321-166 423-114 117-271 178-425 178-338 0-673-303-819-454-146 151-481 454-819 454-153 0-310-61-424-178C66 2456 0 2313 0 2135c0-179 66-322 166-424 114-117 271-178 424-178 276 0 549 201 720 357zm-1002-40c-65 67-109 163-109 285s44 217 109 285c75 76 180 117 282 117 275 0 566-275 686-402-120-128-411-403-686-403-102 0-207 41-282 118z'/%3E%3C/svg%3E" />
		</Helmet>
		<GlobalStyle />
		<StyledMain>
			<Navigation />
			{children}
		</StyledMain>
	</div>
)

export default Layout
