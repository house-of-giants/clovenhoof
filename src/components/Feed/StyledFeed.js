import styled from 'styled-components'

const StyledFeed = styled.div`
	display: grid;
	grid-gap: 1.875rem;
	grid-template-columns: 1fr;
	padding: 3.75rem 0;

	& .feed-viewer {
		position: relative;

		& img {
			animation: fade-over 300ms ease;
			animation-fill-mode: forwards;
			height: 100%;
			left: 0;
			object-fit: contain;
			opacity: 0;
			position: absolute;
			top: 0;
			width: 100%;


			@keyframes fade-over {
				from {
					opacity: 0;
					transform: translateX(-3%);
				}
				to {
					opacity: 1;
					transform: translateX(0);
				}
			}
		}
	}
`

export default StyledFeed