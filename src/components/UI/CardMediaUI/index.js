import React from 'react'
import { CardMedia } from '@material-ui/core'
import { withTheme } from 'styled-components'

const CardMediaUI = props => <CardMedia {...props}>{props.children}</CardMedia>

export default withTheme(CardMediaUI)
