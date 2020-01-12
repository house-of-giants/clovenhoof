import { css } from 'styled-components'
import { styledNormalize } from 'styled-normalize'
import { PrefersReducedMotion, DocStyles, Fonts } from './base'

const globalStyles = css`
  ${styledNormalize}
  ${Fonts}
  ${PrefersReducedMotion}
  ${DocStyles}
`

export default globalStyles;