import styled from 'styled-components'
import theme from '../../../../theme'

console.log(theme.breakpoints.down('sm'))

export const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    ${`${theme.breakpoints.down('sm')}`} (
        background-color: orange;
      )
`
