import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { romanize } from '../../utils/utils'

import { StyledButtonLink } from '../Button/StyledButton'
import StyledFeed from './StyledFeed'
import StyledGrid from './StyledGrid'

const Feed = ({ posts }) => (
	<StyledFeed>
		<div className="feed-wrapper">
			<StyledGrid>
				{posts.map( (post, index) => (
					<div key={post.node.id} className="post" style={{animationDelay: index * 100 + 'ms'}}>
						<h3 className="label">{romanize(index)}</h3>
						<div className="image">
							<a href={`https://instagram.com/p/${post.node.id}`} target="_blank" rel="noopener noreferrer">
								<img src={post.node.preview} alt={post.node.caption} />
							</a>
						</div>
						<div className="icon">
							<svg className="planet" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 21 39"><path id="path6570" fill="none" strokeWidth="3" d="M4.5.44v29"/><path id="path6572" fill="none" strokeWidth="3" d="M.5 6.44h12"/><path id="path6574" fill="none" strokeWidth="3" d="M18.5 35.44c-1 1-2 2-3 2s-3-1-3-3 1-4 3-6 4-6 4-10-2-8-6-8c-3.78 0-7 2-9 6"/></svg>
						</div>
					</div>
				) )}
			</StyledGrid>
			<p><StyledButtonLink href="https://instagram.com/clovenhoof_tattoo" target="_blank" rel="noopener noreferrer">View All Work</StyledButtonLink></p>
		</div>
	</StyledFeed>
)

export default props => (
	<StaticQuery
		query={query}
		render={ data => <Feed posts={data.allInstaNode.edges} {...props} /> }
	/>
)

export const query = graphql`
  query ScrapingQuery {
		allInstaNode(sort: {fields: timestamp, order: DESC}) {
			edges {
				node {
					id
					preview
					caption
				}
			}
		}
	}
`
