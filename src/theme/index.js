import { createMuiTheme } from '@material-ui/core/styles'

const sourceSansPro = {
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Source Sans Pro'),
    local('Source-Sans-Pro'),
    url('./assets/fonts/SourceSansPro-Regular.otf') format('opentype')
  `,
}

const theme = createMuiTheme({
  typography: {
    ...sourceSansPro,
  },
  fontSize: {
    xxl: 160,
    xl: 60,
    large: 40,
    h1: 36,
    h2: 26,
    h3: 24,
    h4: 22,
    h5: 20,
    h6: 18,
    body1: 16,
    body2: 14,
    body3: 12,
    body4: 10,
  },
  color: {
    primary: '#red',
  },
})

export default theme
