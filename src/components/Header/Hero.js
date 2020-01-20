import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const StyledHero = styled.div`
	align-items: center;
	display: flex;
	height: 60vh;
	justify-content: center;
	min-height: 500px;
	position: relative;

	&::before {
		background-color: rgba(0, 0, 0, 0.7);
		content: "";
		left: 0;
		position: absolute;
		height: 100%;
		top: 0;
		width: 100%;
		z-index: 2;
	}

	& img {
		height: 100%;
		left: 0;
		object-fit: cover;
		object-position: 10% 19%;
		position: absolute;
		top: 0;
		width: 100%
	}

	& svg {
		position: relative;
		z-index: 2;
	}
`

const Hero = () => (
	<StyledHero>
		<Header />
		<img src="/images/kevin-headshot.jpg" alt="" />
	</StyledHero>
)

export default Hero