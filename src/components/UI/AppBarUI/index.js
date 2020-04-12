import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import theme from '../../../theme'

export const AppBarUI = styled(AppBar)`
  border-bottom: ${props =>
    props.elevation === 0 ? `1px solid ${theme.palette.grey[300]}` : 'none'};
`
