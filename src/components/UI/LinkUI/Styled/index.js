import styled from 'styled-components'
import { Link } from '@material-ui/core'
import { formatTextSize } from '../../../../helpers'

const LinkUI = styled(Link)`
  font-family: ${props =>
    props.brandText
      ? props.theme.typography.brandFamily
      : props.theme.typography.fontFamily};
  ${props => formatTextSize(props.size)}px;
  color: ${props => props.color};
  ${props => `text-decoration: ${props.decoration ? props.decoration : 'none'}`}
`
export default LinkUI
