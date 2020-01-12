import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import FeedNav from './FeedNav'

import { mq } from '../../styles/base/variables'

const StyledFeed = styled.div`
  padding: 3.75rem 0;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  margin-bottom: 1.875rem;

  @media(${mq.bpXLarge}) {
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  }

  a {
    animation: fade-in 500ms ease;
    animation-fill-mode: forwards;
    opacity: 0;
    position: relative;

    &::before {
      content: "";
      display: block;
      padding-top: calc((1 / 1) * 100%);
      width: 100%;
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

  img {
    bottom: 0;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
  }
`

const Feed = () => {
  const [ loading, setLoading ] = useState(true)
  const [ posts, setPosts ] = useState([])
  const [ query, setQuery ] = useState(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${process.env.INSTA_ACCESS_TOKEN}&limit=12`)
  const [ nextPosts, setNextPosts ] = useState(null)
  const [ prevPosts, setPrevPosts ] = useState(null)

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
          }
        })
        .then( setTimeout( () => setLoading(false), 800 ) )
        .catch(err => {
          console.log(err)
        })
      fetchPosts()
  }, [query])

  console.log(loading)

  return (
    <StyledFeed>
      <FeedNav setQuery={setQuery} prevPosts={prevPosts} nextPosts={nextPosts} />
      {loading === true &&
        <h1>Loading...</h1>
      }
      <StyledGrid>
        {posts.map( (post, index) => ( <a key={post.id} target="_blank" rel="noopener noreferrer" href={post.permalink} style={{animationDelay: index * 100 + 'ms'}}><img src={post.media_url} alt={post.caption} /></a> ) )}
      </StyledGrid>
      <FeedNav setQuery={setQuery} prevPosts={prevPosts} nextPosts={nextPosts} />
    </StyledFeed>
  )
}

export default Feed