import React, {Component} from 'react'
import MuiDrawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import DrawerMenuItem from './drawerMenuItem'

class Drawer extends Component {
  constructor() {
    super()

    this.menuItemClickHandler = this.menuItemClickHandler.bind(this)
  }

  menuItemClickHandler(clickedItem) {
    if(this.props.closeDrawer) {
      this.props.closeDrawer()
    }

    this.props.selectSection(clickedItem)
  }

  createMenuList() {
    const list = Object.keys(resume).map((section) => {
      return (
        <DrawerMenuItem
          label={section}
          onTouchTap={() => this.menuItemClickHandler(section)}
          key={section}
        />
      )
    })

    return list
  }

  render() {
    return (
      <MuiDrawer
        open={this.props.open}
        width={this.props.width}
        docked={this.props.docked}
        onRequestChange={() => {this.props.closeDrawer()}}
      >
        {this.createMenuList()}
      </MuiDrawer>
    )
  }
}

export default Drawer
