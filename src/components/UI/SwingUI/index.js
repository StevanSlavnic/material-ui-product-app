import styled, { keyframes, css } from 'styled-components'
import { swing } from 'react-animations'

const swingAnimation = keyframes`${swing}`

export const SwingUI = styled.div`
  animation: ${props =>
    props.animate
      ? css`
      .5s ${swingAnimation};
        `
      : ''};
`
