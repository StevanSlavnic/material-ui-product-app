import styled from 'styled-components'
import { Chip } from '@material-ui/core'
import { formatTextSize } from 'src/helpers'
import theme from 'src/theme'

function getSize(props) {
  return theme.spacing(props.spacing) || 0
}

export const ChipUI = styled(Chip)`
  font-size: ${props => formatTextSize(props.size)};
  color: #ffffff;
  font-weight: bold;
  color: ${props => props.color};
  text-transform: uppercase;

  ${props =>
    props.spacing &&
    !props.bottomOnly &&
    !props.horizontal &&
    `
    margin-top: ${getSize(props) / 2}px;
    margin-bottom: ${getSize(props) / 2}px;
  `};
  ${props =>
    props.spacing && props.bottomOnly && `margin-bottom: ${getSize(props)}px`};
  ${props =>
    props.spacing &&
    props.horizontal &&
    `
    margin-left: ${getSize(props) / 2}px;
    margin-right: ${getSize(props) / 2}px;
  `};
  ${props =>
    props.spacing &&
    props.wrapped &&
    `
    margin: 0;
    margin-bottom: ${getSize(props)}px;
    margin-right: ${getSize(props)}px;
  `};
`
