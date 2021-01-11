import React from 'react'
import Link from 'next/link'

import Sulfur from '../Sulfur'
import StyledNav from './StyledNav'

import { colors } from '../../styles/base/variables'

const Navigation = () => {
	return (
		<StyledNav>
			<ul>
				<li><Link href="#"><a><Sulfur fill={colors.highlight} /></a></Link></li>
				<li><Link href="#contact"><a>Contact</a></Link></li>
			</ul>
		</StyledNav>
	)
}

export default Navigation