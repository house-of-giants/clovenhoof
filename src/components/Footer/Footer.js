import React from 'react'
import styled from 'styled-components'

import Navigation from '../Navigation/Navigation'

import { fonts, red, mq, containerWidth } from '../../styles/base/variables'

const StyledFooter = styled.footer`
  background-color: #333;
  grid-column: span 2;
  padding-top: 1.875rem;

  & h2 {
    color: ${red};
    font-family: ${fonts.display};
    font-size: 2rem;
    line-height: 1;
    margin: 0;

    @media (${mq.bpLarge}) {
      padding-right: 1.875rem;
    }
  }

  & .inner {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: ${containerWidth};
    margin: 0 auto;

    @media (${mq.bpLarge}) {
      justify-content: flex-start;
    }
  }

  & nav {
    font-size: 1rem;
  }
`

const Footer = () => (
  <StyledFooter>
    <div className="inner">
      <h2>Clovenhoof Tattoo</h2>
      <Navigation />
    </div>
  </StyledFooter>
)

export default Footer