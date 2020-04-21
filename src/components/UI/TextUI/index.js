import React from 'react'
import PropTypes from 'prop-types'
import Text from './Styled'

export const TextUI = props => <Text {...props}>{props.children}</Text>

TextUI.propTypes = {
  children: PropTypes.any,
}
