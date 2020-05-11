import React from 'react'
import styled from 'styled-components'
import { mq } from '../../styles/base/variables'

const StyledHero = styled.div`
	align-items: center;
	display: flex;
	height: 30vh;
	justify-content: center;
	position: relative;

	@media(${mq.bpLarge}) {
		height: 60vh;
		min-height: 500px;
	}

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
		max-width: none;
		object-fit: cover;
		object-position: 10% 19%;
		position: absolute;
		top: 0;
		width: 100%
	}

	& h1 {
		position: relative;
		z-index: 2;
	}
`

const Hero = ({ title }) => (
	<StyledHero>
		<h1>{title}</h1>
		<img src="/images/kevin-headshot.jpg" alt="" />
	</StyledHero>
)

export default Hero