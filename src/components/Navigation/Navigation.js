import React from 'react'
import { Link } from 'gatsby'

import Sulfur from '../Logo/Sulfur'
import StyledNav from './StyledNav'

import { colors } from '../../styles/base/variables'

const Navigation = () => {
	return (
		<StyledNav>
			<ul>
				<li><Link to='/about'>About</Link></li>
				<li><Link to="/"><Sulfur fill={colors.highlight} /></Link></li>
				<li><Link to='/contact'>Contact</Link></li>
			</ul>
		</StyledNav>
	)
}

export default Navigation