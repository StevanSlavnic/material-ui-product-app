import theme from 'src/theme'

export default size => `${size ? theme.fontSize[size] : theme.fontSize.body1}px`
