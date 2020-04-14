import styled from 'styled-components'
import { InputBase } from '@material-ui/core'
import { formatTextSize } from '../../../helpers'

export const InputUI = styled(InputBase)`
  border: 1px solid #ddd;
  padding: 0px 10px;
  font-size: ${props => formatTextSize(props.size)};
  max-width: 60px;
`
