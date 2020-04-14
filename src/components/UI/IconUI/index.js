import styled from 'styled-components'
import { formatTextSize } from '../../../helpers'
import theme from '../../../theme'

export const IconUI = styled.i`
  font-size: ${props => formatTextSize(props.size)};
  color: ${props => (props.color ? props.color : theme.palette.grey[400])};
`
