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
      selectedSection: "Intro"
    }

    this.closeDrawer = this.closeDrawer.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
    this.selectSection = this.selectSection.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
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

  selectSection(item) {
    this.setState({selectedSection: item})
  }

  render() {
    if (window.innerWidth > 735) {
      return (
        <div>
          <AppBar openDrawer={this.openDrawer} selectedSection={this.state.selectedSection} style={{
            paddingLeft: "30%",
            position: "fixed",
            top: 0
          }} titleStyle={{
            paddingLeft: "25px"
          }} showMenuIconButton={false}/>

          <Drawer open={true} selectSection={this.selectSection} width={"30%"}/>

          <Body style={{
            paddingLeft: "30%",
            paddingTop: "60px"
          }} selectedSection={this.state.selectedSection}/>
        </div>
      )
    } else {
      return (
        <div>
          <AppBar openDrawer={this.openDrawer} selectedSection={this.state.selectedSection} style={{
            position: "fixed",
            top: 0
          }}/>

          <Drawer closeDrawer={this.closeDrawer} open={this.state.drawerOpen} selectSection={this.selectSection} docked={false}/>

          <Body style={{
            paddingTop: "60px"
          }} selectedSection={this.state.selectedSection}/>
        </div>
      )
    }
  }
}

export default App
