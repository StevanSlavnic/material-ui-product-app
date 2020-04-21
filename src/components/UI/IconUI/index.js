import styled from 'styled-components'
import { formatTextSize } from 'src/helpers'
import theme from 'src/theme'

export const IconUI = styled.i`
  font-size: ${props => formatTextSize(props.size)};
  color: ${props => (props.color ? props.color : theme.palette.grey[400])};
`
