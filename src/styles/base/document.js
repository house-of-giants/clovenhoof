import { css } from 'styled-components'
import { colors, fonts } from './variables'

export const DocStyles = css`
  body {
    background: ${ colors.primary };
    background: linear-gradient(to top, #000000, #1a1a1a);
    color: ${ colors.secondary };
    font-family: ${fonts.body};
    margin: 0;
    padding: 0;
  }

  a {
    color: ${ colors.highlight };
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  & h1 {
    font-size: 5rem;
    font-family ${fonts.display};
    letter-spacing: 10px;
    padding: 1.875rem 0;
    text-align: center;
  }

  .screen-reader-text {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`