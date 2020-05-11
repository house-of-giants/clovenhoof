import styled from 'styled-components'

import { mq } from '../../styles/base/variables'

const StyledContent = styled.main`
	font-size: 1.6rem;
	padding-bottom: 3rem;

	& .content {
		display: grid;

		@media( ${mq.bpLarge} ) {
			grid-template-columns: repeat(${props => props.grid}, 1fr);
		}
	}

	& .alignleft {
		display: block;
		margin: 1rem auto;

		@media( ${mq.bpMedium} ) {
			float: left;
			margin-bottom: 1rem;
			margin-right: 2rem;
		}
	}

	& img {
		max-width: 400px;
	}

	& iframe {
		max-width: 100%;
	}
`

export default StyledContent