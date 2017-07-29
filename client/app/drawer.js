import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'

class customDrawer extends Component {
  constructor() {
    super()

    this.menuItemClickHandler = this.menuItemClickHandler.bind(this)
  }

  menuItemClickHandler(clickedItem) {
    this.props.closeDrawer()
    this.props.selectItem(clickedItem)
  }

  createMenuList() {
    const list = Object.keys(resume).map((key) => {
      let zDepth = 0
      const onMouseOverHandler = () => {zDepth = 5}

      return (
        <Paper
          onTouchTap={() => this.menuItemClickHandler(key)}
          onMouseOver={() => {onMouseOverHandler()}}
          style={{"padding": "20px"}}
          zDepth={zDepth}
          key={key}
        >
          {key}
        </Paper>
      )
    })

    return list
  }

  render() {
    return (
      <Drawer
        open={this.props.open}
        width="100%"
      >
        {this.createMenuList()}
      </Drawer>
    )
  }
}

export default customDrawer
