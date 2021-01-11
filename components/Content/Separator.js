import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/base/variables'
import Sulfur from '../Sulfur'

const StyledSeparator = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  &::after {
    background-color: #484848;
    content: "";
    height: 1px;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  & svg {
    background-color: ${colors.primary};
    padding: 1rem;
  }
`

const Separator = () => (
  <StyledSeparator>
    <Sulfur fill={colors.highlight} />
  </StyledSeparator>
)

export default Separator