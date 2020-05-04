import { css } from 'styled-components'
import { colors, fonts } from './variables'

export const DocStyles = css`
  body {
    background: ${ colors.primary };
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

  h1,
  .h1 {
    color: ${colors.secondary};
    font-size: calc(1rem + 9vw);
    font-family ${fonts.display};
    letter-spacing: 10px;
    margin: 1.25rem;
    padding: 1.875rem 0;
    text-align: center;
  }

  h2,
  h3,
  h4,
  h5 {
    font-weight: 900;
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

  img {
    max-width: 100%;
  }
`