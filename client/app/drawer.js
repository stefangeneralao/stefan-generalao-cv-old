import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import DrawerMenuItem from './drawerMenuItem'

class customDrawer extends Component {
  constructor() {
    super()

    this.menuItemClickHandler = this.menuItemClickHandler.bind(this)
  }

  menuItemClickHandler(clickedItem) {
    if(this.props.closeDrawer) this.props.closeDrawer()
    this.props.selectItem(clickedItem)
  }

  createMenuList() {
    const list = Object.keys(resume).map((key) => {
      return (
        <DrawerMenuItem
          label={key}
          onTouchTap={() => this.menuItemClickHandler(key)}
          key={key}
        />
      )
    })

    return list
  }

  render() {
    return (
      <Drawer
        open={this.props.open}
        width="30%"
        docked={this.props.docked}
        onRequestChange={() => {this.props.closeDrawer()}}
      >
        {this.createMenuList()}
      </Drawer>
    )
  }
}

export default customDrawer
