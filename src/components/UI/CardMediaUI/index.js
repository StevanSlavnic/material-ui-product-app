import React from 'react'
import PropTypes from 'prop-types'
import { CardMedia } from '@material-ui/core'
import { withTheme } from 'styled-components'

const CardMediaUI = props => <CardMedia {...props}>{props.children}</CardMedia>

CardMediaUI.propTypes = {
  children: PropTypes.element,
}

export default withTheme(CardMediaUI)
