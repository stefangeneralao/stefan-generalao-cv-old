import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import AppBar from './appBar'
import Drawer from './drawer'
import Body from './body'

class App extends Component {
  constructor() {
    super()

    this.state = {
      drawerOpen: true,
      selectedItem: null
    }

    this.closeDrawer = this.closeDrawer.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
    this.selectItem = this.selectItem.bind(this)
  }

  closeDrawer() {
    this.setState({drawerOpen: false})
  }

  openDrawer() {
    this.setState({drawerOpen: true})
  }

  selectItem(item) {
    this.setState({selectedItem: item})
  }

  render() {
    return (
      <div>
        <AppBar
          openDrawer={this.openDrawer}
          selectedItem={this.state.selectedItem}
        />

        <Drawer
          closeDrawer={this.closeDrawer}
          open={this.state.drawerOpen}
          selectItem={this.selectItem}
        />

        <Body
          selectedItem={this.state.selectedItem}
        />
      </div>
    )
  }
}

export default App
