import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import {MuiThemeProvider} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import * as colors from 'material-ui/styles/colors'
import store from './store'
import {fade} from 'material-ui/utils/colorManipulator'

injectTapEventPlugin()
window.store = store()

// Theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.blue500,
    primary2Color: colors.cyan700,
    primary3Color: colors.grey400,
    accent1Color: colors.pinkA200,
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: fade(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.cyan500,
    clockCircleColor: fade(colors.darkBlack, 0.07),
    shadowColor: colors.fullBlack,
  }
})

// Render application within MuiThemeProvider from material-ui
// and within Provider from Redux.
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)

// Welcome message
console.log('Välkommen kära utvecklare!')
console.log('Om du hellre vill läsa mitt CV i JSON-format, skriv bara "store" i consolen. I det objektet hittar du hela applikationens lagring och state.')
console.log('Tack!')
