import styled from 'styled-components'
import { mq, colors, fonts } from '../../styles/base/variables'

const StyledGrid = styled.div`
	display: grid;
	grid-column-gap: 4rem;
	grid-row-gap: 9rem;
	margin: 4rem 0;

	@media(${mq.bpMedium}) {
		grid-template-columns: repeat( 2, 1fr );
	}

	@media(${mq.bpLarge}) {
		grid-template-columns: repeat( 3, minmax(160px, 1fr) );
	}

	& .post {
		animation: fade-in 500ms ease;
		animation-fill-mode: forwards;
		background-color: transparent;
		border: 1px solid #cebc92;
		border-radius: 4px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		opacity: 0;

		@keyframes fade-in {
			from {
				opacity: 0;
				transform: translateY(-10%);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	}

	& .label {
		color: ${colors.primary};
		margin: 0;
		padding: 1rem 0 0;
		text-align: center;
		display: flex;
		background-color: #cdbb91;
		border-radius: 50%;
		font-family: ${fonts.body};
		font-weight: 100;
		width: 74px;
		height: 74px;
		line-height: 1.3;
		padding: 0;
		align-items: center;
		justify-content: center;
		margin: 0px auto;
		position: absolute;
		left: 50%;
		transform: translateX(-50%) translateY(-2rem);
		z-index: 5;
	}

	& .image {
		border: 6px solid #cebc92;
		box-sizing: border-box;
		margin: 1rem;
		position: relative;

		&::before {
			content: "";
			display: block;
			padding-top: calc((3 / 2) * 100%);
			width: 100%;
		}
	}

	& svg {
		stroke: ${colors.secondary};
		height: 28px;
		width: 32px;
	}

	& .icon {
		background: ${colors.highlight};
		border-radius: 50%;
		left: 50%;
		margin: 0 auto;
		padding: 2rem;
		position: absolute;
		top: 0;
		transform: translateX(-50%) translateY(-100%);
	}

	& img,
	& video {
		bottom: 0;
		box-sizing: border-box;
		height: 100%;
		object-fit: cover;
		padding: 0;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		transition: border-radius 300ms ease, transform 300ms ease;
		width: 100%;
	}
`

export default StyledGrid