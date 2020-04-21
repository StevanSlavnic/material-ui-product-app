import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import theme from 'src/theme'

function getSize(props) {
  return theme.spacing(props.size) || 0
}

export default styled(Divider)`
  ${props => props.height && `height: ${props.height}px`}
  ${props => props.width && `width: ${props.width}px`}
  ${props =>
    props.size &&
    !props.bottomOnly &&
    !props.horizontal &&
    `
    margin-top: ${getSize(props) / 2}px;
    margin-bottom: ${getSize(props) / 2}px;
  `};
  ${props =>
    props.size && props.bottomOnly && `margin-bottom: ${getSize(props)}px`};
  ${props =>
    props.size &&
    props.horizontal &&
    `
    margin-left: ${getSize(props) / 2}px;
    margin-right: ${getSize(props) / 2}px;
  `};
  ${props =>
    props.size &&
    props.wrapped &&
    `
    margin: 0;
    margin-bottom: ${getSize(props)}px;
    margin-right: ${getSize(props)}px;
  `};
`
