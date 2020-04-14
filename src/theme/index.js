import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
    local('Source Sans Pro'),
    local('Source-Sans-Pro'),
    url('./assets/fonts/SourceSansPro-Regular.otf') format('opentype')
  `,
  },
  palette: {
    primary: { main: grey[700], darken: grey[900] },
    secondary: {
      main: '#e45144',
    },
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
})

export default theme
