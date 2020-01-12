import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Layout from '../theme/layout'
import Logo from '../components/Logo/Logo'
import Feed from '../components/Feed/Feed'

import { StyledContainer } from '../styles/global/layout'

export default () => (
  <Layout>
    <Feed />
  </Layout>
)
