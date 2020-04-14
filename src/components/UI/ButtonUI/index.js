import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { formatTextSize } from '../../../helpers'

export const ButtonUI = styled(Button)`
  border-radius: 0;
  text-transform: none;
  ${props => props.fontSize && `font-size: ${formatTextSize(props.fontSize)}`};
  padding: 1px 10px;
  font-weight: 600;
`
