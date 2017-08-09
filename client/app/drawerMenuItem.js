import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import {fade} from 'material-ui/utils/colorManipulator'

class DrawerMenuItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zDepth: 0,
      backgroundColor: fade("#fff", 0.0)
    }
  }

  onMouseOverHandler() {
    this.setState({
      zDepth: 1,
      backgroundColor: fade("#f2f2f2", 1.0)
    })
  }

  onMouseOutHandler() {
    this.setState({
      zDepth: 0,
      backgroundColor: fade("#fff", 0.0)
    })
  }

  render() {
    return (
      <Paper onTouchTap={this.props.onTouchTap} style={{
        "padding": "20px",
        "background": this.state.backgroundColor
      }} zDepth={this.state.zDepth} onMouseOver={() => {
        this.onMouseOverHandler()
      }} onMouseOut={() => {
        this.onMouseOutHandler()
      }}>
        <text style={{fontSize: 14, fontWeight: "bold"}}>{this.props.label}</text>
      </Paper>
    )
  }
}

export default DrawerMenuItem
