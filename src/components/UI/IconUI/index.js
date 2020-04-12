import styled from 'styled-components'
import { formatTextSize } from '../../../helpers'

export const IconUI = styled.i`
  font-size: ${props => formatTextSize(props.size)};
  color: ${props => props.color};
`
