import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import {MuiThemeProvider} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import * as colors from 'material-ui/styles/colors'
import store from './store'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack, lightBlue500, deepOrange500
} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator'

injectTapEventPlugin()
window.store = store()

// Theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
})

// Render application within MuiThemeProvider from material-ui
// and within Provider from Redux.
ReactDOM.render(
  // <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)

// Welcome message
console.log('Välkommen kära utvecklare!')
console.log('Vill du hellre läsa mitt CV i JSON-format, då kommer vi nog komma bra överens. Skriv bara "store.content.byId" i consolen så är det löst.')
console.log('Tack!')
