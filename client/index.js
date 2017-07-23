import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import {MuiThemeProvider} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import * as colors from 'material-ui/styles/colors'
import resume from './resume'

window.resume = resume()

// Render application within MuiThemeProvider from material-ui
// and within Provider from Redux.
ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
