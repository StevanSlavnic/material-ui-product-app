import styled from 'styled-components'
import { Card } from '@material-ui/core'

const CardUI = styled(Card)`
  border-radius: 2px;
  ${props =>
    props.centered &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.margin && `margin: ${props.margin}`};
  ${props => props.width && `width: ${props.width}`};
  ${props => props.height && `height: ${props.height}`};
`
export default CardUI
