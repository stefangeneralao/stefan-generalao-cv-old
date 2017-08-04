import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import AppBar from './appBar'
import Drawer from './drawer'
import Body from './body'

class App extends Component {
  constructor() {
    super()

    this.state = {
      drawerOpen: false,
      selectedItem: "Intro"
    }

    this.closeDrawer = this.closeDrawer.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
    this.selectItem = this.selectItem.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    this.forceUpdate()
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
    console.log(window.innerWidth)

    if(window.innerWidth > 750){
      console.log("rendering for desktop")
      return (
        <div>
          <AppBar
            openDrawer={this.openDrawer}
            selectedItem={this.state.selectedItem}
            style={{paddingLeft: "30%"}}
            titleStyle={{paddingLeft: "25px"}}
            showMenuIconButton={false}
          />

          <Drawer
            open={true}
            selectItem={this.selectItem}
          />

          <Body
            style={{paddingLeft: "30%"}}
            selectedItem={this.state.selectedItem}
          />
        </div>
      )
    }else{
      console.log("rendering for smartphone")
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
            docked={false}
          />

          <Body
            selectedItem={this.state.selectedItem}
          />
        </div>
      )
    }
  }
}

export default App
