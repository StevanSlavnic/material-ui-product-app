import styled, { css } from 'styled-components'
import { Link } from '@material-ui/core'
import { formatTextSize } from 'src/helpers'

const LinkUI = styled(Link)`
  ${props => `font-size: ${formatTextSize(props.size)}`};
  ${props =>
    `text-decoration: ${props.decoration ? props.decoration : 'none'}`};
  color: #89bbd6;

  ${props =>
    props.hovered &&
    css`
      &:hover {
        opacity: 0.8;
      }
    `}
`
export default LinkUI
