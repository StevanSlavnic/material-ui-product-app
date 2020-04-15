import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import theme from '../../../theme'

export const AppBarUI = styled(AppBar)`
  ${props =>
    props.scroll
      ? `box-shadow: 
        rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, 
        rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
        rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;`
      : `
      border-bottom: 
        1px solid ${theme.palette.grey[300]}
      `};
`
