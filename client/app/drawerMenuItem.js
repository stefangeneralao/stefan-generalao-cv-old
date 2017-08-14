import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import {fade} from 'material-ui/utils/colorManipulator'
import {ListItem} from 'material-ui/List'

class DrawerMenuItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zDepth: 0,
      backgroundColor: fade("#fff", 0.0)
    }
  }

  render() {
    return (
      <ListItem onTouchTap={this.props.onTouchTap} style={{
        "background": this.state.backgroundColor
      }}>
        <text style={{fontSize: 12, fontWeight: "bold"}}>{this.props.label}</text>
      </ListItem>
    )
  }
}

export default DrawerMenuItem
