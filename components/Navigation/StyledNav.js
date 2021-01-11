import styled from 'styled-components'

import { colors, fonts } from '../../styles/base/variables'

const StyledNav = styled.nav`
	display: flex;
	font-size: 1.5rem;
	padding: 1.875rem 0;
	position: sticky;
	top: 0;
	z-index: 10;

	ul {
		align-items: center;
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
		box-sizing: border-box;
		display: inline-flex;
		padding: .875rem 0;

		&:not(:last-child) {
			margin-right: 1rem;
		}
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
		width: 22px;
	}
`

export default StyledNav