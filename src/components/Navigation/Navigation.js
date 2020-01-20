import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { colors, fonts } from '../../styles/base/variables'

const StyledNav = styled.nav`
	display: flex;
	font-size: 2rem;
	justify-content: center;
	padding: 1.875rem 0;

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		line-height: 1;
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	li {
		display: inline-flex;
		padding: .875rem;
	}

	a {
		color: ${colors.secondary};
		font-family: ${fonts.display};
		transition: 300ms ease color;

		&:hover {
			color: ${colors.highlight};
			text-decoration: none;
		}
	}
`


const Navigation = () => {
	return (
		<StyledNav>
			<ul>
				<li><Link to='/about'>About</Link></li>
				<li><Link to='/contact'>Contact</Link></li>
			</ul>
		</StyledNav>
	)
}

export default Navigation