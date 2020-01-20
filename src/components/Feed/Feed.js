import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import FeedNav from './FeedNav'

import { mq } from '../../styles/base/variables'

const StyledFeed = styled.div`
	display: grid;
	grid-gap: 1.875rem;
	grid-template-columns: 1fr;
	padding: 3.75rem 0;

	@media (${mq.bpLarge}) {
		grid-gap: 5.625rem;
		grid-template-columns: 2fr 3fr;
	}

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

const StyledGrid = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
	margin-bottom: 1.875rem;

	@media(${mq.bpMedium}) {
		grid-template-columns: repeat( 3, 1fr );
	}

	@media(${mq.bpXLarge}) {
		grid-template-columns: repeat( auto-fit, minmax(160px, 1fr) );
	}

	& button {
		animation: fade-in 500ms ease;
		animation-fill-mode: forwards;
		background-color: transparent;
		border: none;
		cursor: pointer;
		opacity: 0;
		position: relative;

		&::before {
			content: "";
			display: block;
			padding-top: calc((1 / 1) * 100%);
			width: 100%;
		}

		&:focus,
		&:hover {
			z-index: 3;

			& img {
				border-radius: 0;
				transform: scale(1.2);
				z-index: 3;
			}
		}

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

	& img {
		border-radius: 7px;
		bottom: 0;
		height: 100%;
		object-fit: cover;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		transition: border-radius 300ms ease, transform 300ms ease;
		width: 100%;
	}
`

const Feed = () => {
	const [ loading, setLoading ] = useState(true)
	const [ posts, setPosts ] = useState([])
	const [ query, setQuery ] = useState(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${process.env.GATSBY_INSTA_ACCESS_TOKEN}&limit=12`)
	const [ nextPosts, setNextPosts ] = useState(null)
	const [ prevPosts, setPrevPosts ] = useState(null)
	const [ selected, setSelected ] = useState(null)

	useEffect(() => {
		const fetchPosts = () => 
			axios.get( query )
				.then(res => {
					const { next, previous } = res.data.paging
					const { data } = res.data
					if (next === nextPosts) {
						return fetchPosts()
					} else {
						setPosts(data ? data : null);
						setNextPosts(next ? next : null)
						setPrevPosts(previous ? previous : null)
						if (!selected) {
							setSelected(data ? data[0] : null)
						}
					}
				})
				.then( setTimeout( () => setLoading(false), 300 ) )
				.catch(err => {
					console.log(err)
				})
			fetchPosts()
	}, [query, nextPosts, selected])

	useEffect(() => {
		const getSelected = () => {
			setSelected( selected ? selected: null )
		}
		getSelected()
	}, [selected])

	return (
		<StyledFeed>
			<div className="feed-wrapper">
				<FeedNav setQuery={setQuery} prevPosts={prevPosts} nextPosts={nextPosts} />
				{loading === true &&
					<p>Loading...</p>
				}
				<StyledGrid>
					{posts.map( (post, index) => ( <button onClick={() => setSelected(post)} style={{animationDelay: index * 100 + 'ms'}}><img src={post.media_url} alt={post.caption} /></button> ) )}
				</StyledGrid>
				<FeedNav setQuery={setQuery} prevPosts={prevPosts} nextPosts={nextPosts} />
			</div>
			<div className="feed-viewer">
				{loading === true &&
					<p>Loading...</p>
				}
				{selected &&
					<a key={selected.id} target="_blank" rel="noopener noreferrer" href={selected.permalink}>
						<img src={selected.media_url} alt={selected.caption} />
					</a>
				}
			</div>
		</StyledFeed>
	)
}

export default Feed