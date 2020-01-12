import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import { colors, mq } from '../../styles/base/variables'

const StyledHeader = styled.div`
  padding: 0;

  @media (${mq.bpLarge}) {
    padding: 3.75rem 0;
  }

  & nav {
    border-bottom: 1px solid ${colors.secondary};
  }
`

const Header = () => (
  <StyledHeader>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
    </Helmet>
    <Logo />
    <Navigation />
    <p>𝕯𝖊𝖓𝖛𝖊𝖗 𝖙𝖆𝖙𝖙𝖔𝖔𝖎𝖘𝖙</p>
    <p>𝕰𝖒𝖆𝖎𝖑 𝖙𝖔 𝖘𝖈𝖍𝖊𝖉𝖚𝖑𝖊</p>
    <p><a href="https://www.instagram.com/eodtattoocolfax/">@eodtattoocolfax</a></p>
  </StyledHeader>
)

export default Header