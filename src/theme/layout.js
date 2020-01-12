import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import globalStyles from '../styles/styles'
import DocStyles from '../styles/base'

import { containerWidth, mq } from '../styles/base/variables'

const StyledMain = styled.main`
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: ${containerWidth};
  padding: 0 1.875rem;

  @media (${mq.bpLarge}) {
    grid-gap: 5.625rem;
    grid-template-columns: 1fr 3fr;
  }
`

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`

const Layout = ({ children }) => (
  <div className='app'>
    <GlobalStyle />
    <StyledMain>
      <Header />
      {children}
    </StyledMain>
    <Footer />
  </div>
)

export default Layout
