import styled from 'styled-components'
import theme from 'src/theme'

function getSize(props) {
  return theme.spacing(props.size) || 0
}

export const SpacerUI = styled.div`
  ${props =>
    props.size &&
    !props.bottomOnly &&
    !props.horizontal &&
    `
    padding-top: ${getSize(props) / 2}px;
    padding-bottom: ${getSize(props) / 2}px;
  `};
  ${props =>
    props.size && props.bottomOnly && `padding-bottom: ${getSize(props)}px`};
  ${props =>
    props.size &&
    props.horizontal &&
    `
    padding-left: ${getSize(props) / 2}px;
    padding-right: ${getSize(props) / 2}px;
  `};
  ${props =>
    props.size &&
    props.wrapped &&
    `
    padding: 0;
    padding-bottom: ${getSize(props)}px;
    padding-right: ${getSize(props)}px;
  `};
`
