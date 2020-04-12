import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { formatTextSize } from '../../../helpers'

export const ButtonUI = styled(Button)`
  border-radius: 0;
  text-transform: none;
  ${props => props.fontSize && `font-size: ${formatTextSize(props.fontSize)}`};
  font-weight: 600;
`
