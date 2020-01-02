import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../theme/layout'

import { StyledContainer } from '../styles/global/layout'

const StyledGrid = styled.div`
  display: grid;
  grid-gap 2rem;
  grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );

  a {
    position: relative;

    &::before {
      content: "";
      display: block;
      padding-top: calc((597 / 478) * 100%);
      width: 100%;
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

export default ({data}) => (
  <Layout>
    <StyledContainer>
      <h1>Clovenhoof Tattoo</h1>
      <StyledGrid>
        {data.allInstaNode.edges.map( instaObj => <a target="_blank" rel="nofollow noopener" href={`https://www.instagram.com/p/${instaObj.node.id}`}><img src={instaObj.node.original} /></a>  )}
      </StyledGrid>
    </StyledContainer>
  </Layout>
)

export const query = graphql`
  query InstaQuery {
    allInstaNode {
      edges {
        node {
          id
          original
        }
      }
    }
  }
`