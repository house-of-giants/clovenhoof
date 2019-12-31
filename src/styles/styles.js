import { css } from 'styled-components'
import { styledNormalize } from 'styled-normalize'
import { PrefersReducedMotion, DocStyles } from './base'

const globalStyles = css`
  ${styledNormalize}
  ${PrefersReducedMotion}
  ${DocStyles}
`

export default globalStyles;