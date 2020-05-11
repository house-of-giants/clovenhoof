import styled from 'styled-components'

import { colors, fonts } from '../../styles/base/variables'

const StyledNav = styled.nav`
	display: flex;
	font-size: 1rem;
	margin-bottom:
	padding: 1.875rem 0;
	position: sticky;
	top: 0;
	z-index: 10;

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		line-height: 1;
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	li {
		box-sizing: border-box;
		display: inline-flex;
		padding: .875rem 0;
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

	svg {
		transform: translateX(5px);
		width: 22px;
	}
`

export default StyledNav