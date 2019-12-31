import { css } from 'styled-components'
import { colors } from './variables'

export const DocStyles = css`
  body {
    background-color: ${ colors.primary };
    color: ${ colors.secondary };
  }

  a {
    color: ${ colors.highlight };
  }
`