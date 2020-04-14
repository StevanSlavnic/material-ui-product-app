import styled from 'styled-components'
import { Link } from '@material-ui/core'
import { formatTextSize } from '../../../../helpers'

const LinkUI = styled(Link)`
  ${props => `font-size: ${formatTextSize(props.size)}`};
  ${props => `text-decoration: ${props.decoration ? props.decoration : 'none'}`}
`
export default LinkUI
