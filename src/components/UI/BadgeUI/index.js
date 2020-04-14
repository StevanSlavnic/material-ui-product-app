import styled from 'styled-components'
import { Badge } from '@material-ui/core'

export const BadgeUI = styled(Badge)`
  top: -5px;
  right: -20px;
  > span {
    height: 14px;
    min-width: 14px;
    padding: 0;
    font-size: 9px;
    line-height: 1.2;
  }
`
