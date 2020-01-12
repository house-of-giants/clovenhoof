import React from 'react'
import styled from 'styled-components'

import Button from '../Button/Button'

const StyledFeedNav = styled.div`
	display: flex;
	justify-content: space-between;

	& button:only-child {
		margin-left: auto;
	}
`

const FeedNav = ({ setQuery, prevPosts, nextPosts }) => (
	  <StyledFeedNav>
    {prevPosts !== null &&
      <Button onClick={() => setQuery(prevPosts)}>Newer</Button>
    }
    {nextPosts !== null &&
      <Button onClick={() => setQuery(nextPosts)}>Older</Button>
    }
  </StyledFeedNav>
)

export default FeedNav