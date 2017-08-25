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
    const nestedItems = this.props.nestedItems

    if(this.props.subSection) {
      return (
        <ListItem
          onTouchTap={this.props.onTouchTap}
          style={{
            background: this.state.backgroundColor,
            paddingLeft: "25px"
          }}
          nestedItems={nestedItems}
          primaryTogglesNestedList={true}
        >
          <span style={{fontSize: "12px", fontWeight: "bold"}}>
            {this.props.label}
          </span>
        </ListItem>
      )
    }else{
      return (
        <ListItem
          onTouchTap={nestedItems.length ? null : this.props.onTouchTap}
          style={{
            background: this.state.backgroundColor
          }}
          nestedItems={nestedItems}
          primaryTogglesNestedList={true}
        >
          <span style={{fontSize: "12px", fontWeight: "bold"}}>
            {this.props.label}
          </span>
        </ListItem>
      )
    }
  }
}

export default DrawerMenuItem
