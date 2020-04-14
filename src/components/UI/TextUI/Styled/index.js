import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { formatTextSize } from '../../../../helpers'

const TextUI = styled(Typography)`
  font-size: ${props => formatTextSize(props.size)};
  ${props => props.bold && 'font-weight: bold'};
  ${props => (props.centered ? 'text-align: center' : 'text-align: left')};
  ${props => props.alignRight && 'text-align: right'};
  letter-spacing: ${props => (props.spacing ? props.spacing : 0)}px;
  ${props =>
    props.label &&
    `
  font-size: ${props.theme.typography.body4}px;
  margin-bottom: ${props.theme.spacing.x1}px;
  text-transform: uppercase;
  letter-spacing: 1px;
`}
  ${props => props.textTransform && `text-transform: ${props.textTransform}`};
`
export default TextUI
