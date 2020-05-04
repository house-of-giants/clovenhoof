import React, { useState } from 'react'
import styled from 'styled-components'
// import axios from 'axios'

import FeedNav from './FeedNav'
// import Spinner from '../Spinner/Spinner'

import { mq, colors, fonts } from '../../styles/base/variables'

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

const StyledGrid = styled.div`
	display: grid;
	grid-column-gap: 4rem;
	grid-row-gap: 9rem;
	margin: 4rem 0 1.875rem;

	@media(${mq.bpMedium}) {
		grid-template-columns: repeat( 2, 1fr );
	}

	@media(${mq.bpXLarge}) {
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
		/* color: white; */
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

	& img {
		border-radius: 7px;
		bottom: 0;
		box-sizing: border-box;
		height: 100%;
		padding-top: 2rem;
		object-fit: cover;
		padding: 1rem;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		transition: border-radius 300ms ease, transform 300ms ease;
		width: 100%;
	}
`

const Feed = () => {
	// const [ loading, setLoading ] = useState(true)
	// const [ posts, setPosts ] = useState([])
	// const [ query, setQuery ] = useState(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${process.env.GATSBY_INSTA_ACCESS_TOKEN}&limit=12`)
	// const [ nextPosts, setNextPosts ] = useState(null)
	// const [ prevPosts, setPrevPosts ] = useState(null)
	// const [ selected, setSelected ] = useState(null)

	// useEffect(() => {
	// 	const fetchPosts = () =>
	// 		axios.get( query )
	// 			.then(res => {
	// 				const { next, previous } = res.data.paging
	// 				const { data } = res.data
	// 				if (next === nextPosts) {
	// 					return fetchPosts()
	// 				} else {
	// 					setPosts(data ? data : null);
	// 					setNextPosts(next ? next : null)
	// 					setPrevPosts(previous ? previous : null)
	// 					if (!selected) {
	// 						setSelected(data ? data[0] : null)
	// 					}
	// 				}
	// 				setLoading(false)
	// 			})
	// 			.catch(err => {
	// 				console.log(err)
	// 			})
	// 		fetchPosts()
	// }, [query, nextPosts, selected])

	// useEffect(() => {
	// 	const getSelected = () => {
	// 		setSelected( selected ? selected: null )
	// 	}
	// 	getSelected()
	// }, [selected])

	const posts = [
		{
			id: 1,
			media_url: 'https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/94138862_227389725186347_1592675858403329429_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Aw8frmQLYi4AX_Cydv4&oh=066bde1048fba00af8c7ffec37245311&oe=5ED9F069',
			caption: 'Caption'
		},
		{
			id: 2,
			media_url: 'https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/94138862_227389725186347_1592675858403329429_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Aw8frmQLYi4AX_Cydv4&oh=066bde1048fba00af8c7ffec37245311&oe=5ED9F069',
			caption: 'Caption'
		},
		{
			id: 3,
			media_url: 'https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/94138862_227389725186347_1592675858403329429_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Aw8frmQLYi4AX_Cydv4&oh=066bde1048fba00af8c7ffec37245311&oe=5ED9F069',
			caption: 'Caption'
		},
		{
			id: 4,
			media_url: 'https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/94138862_227389725186347_1592675858403329429_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Aw8frmQLYi4AX_Cydv4&oh=066bde1048fba00af8c7ffec37245311&oe=5ED9F069',
			caption: 'Caption'
		},
		{
			id: 5,
			media_url: 'https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/94138862_227389725186347_1592675858403329429_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Aw8frmQLYi4AX_Cydv4&oh=066bde1048fba00af8c7ffec37245311&oe=5ED9F069',
			caption: 'Caption'
		},
		{
			id: 6,
			media_url: 'https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/94138862_227389725186347_1592675858403329429_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Aw8frmQLYi4AX_Cydv4&oh=066bde1048fba00af8c7ffec37245311&oe=5ED9F069',
			caption: 'Caption'
		},
	]

	const romanize = count => {
		const num = parseInt(count) + 1
		if (isNaN(num))
				return NaN;
		var digits = String(+num).split(""),
				key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
							 "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
							 "","I","II","III","IV","V","VI","VII","VIII","IX"],
				roman = "",
				i = 3;
		while (i--)
				roman = (key[+digits.pop() + (i * 10)] || "") + roman;
		return Array(+digits.join("") + 1).join("M") + roman;
	}

	return (
		<StyledFeed>
			<div className="feed-wrapper">
				{/* <FeedNav setQuery={setQuery} prevPosts={prevPosts} nextPosts={nextPosts} /> */}
				{/* {loading === true &&
					<Spinner />
				} */}
				<StyledGrid>
			{posts.map( (post, index) => (
				<div key={post.id} className="post" style={{animationDelay: index * 100 + 'ms'}}>
					<h3 className="label">{romanize(index)}</h3>
					<div className="image">
						<img src={post.media_url} alt={post.caption} />
					</div>
					<div className="icon">
						<svg className="planet" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 21 39"><path id="path6570" fill="none" strokeWidth="3" d="M4.5.44v29"/><path id="path6572" fill="none" strokeWidth="3" d="M.5 6.44h12"/><path id="path6574" fill="none" strokeWidth="3" d="M18.5 35.44c-1 1-2 2-3 2s-3-1-3-3 1-4 3-6 4-6 4-10-2-8-6-8c-3.78 0-7 2-9 6"/></svg>
					</div>
				</div> ) )}
				</StyledGrid>
				{/* <FeedNav setQuery={setQuery} prevPosts={prevPosts} nextPosts={nextPosts} /> */}
			</div>
			{/* <div className="feed-viewer">
				{selected &&
					<a key={selected.id} target="_blank" rel="noopener noreferrer" href={selected.permalink}>
						<img src={selected.media_url} alt={selected.caption} />
					</a>
				}
			</div> */}
		</StyledFeed>
	)
}

export default Feed