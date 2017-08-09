import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import {MuiThemeProvider} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import * as colors from 'material-ui/styles/colors'
import resume from './resume'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

injectTapEventPlugin()
window.resume = resume()

// Render application within MuiThemeProvider from material-ui
// and within Provider from Redux.
ReactDOM.render(
  // <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
