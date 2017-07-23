import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

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
      return (
        <MenuItem
          onTouchTap={() => this.menuItemClickHandler(key)}
          key={key}
        >
          {key}
        </MenuItem>
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
