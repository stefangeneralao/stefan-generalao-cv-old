import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import AppBar from './appBar'
import Drawer from './drawer'
import Body from './body'
import Footer from './footer'

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
    // Add listener for handling resize-event.
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    // Remove listener for handling resize-event.
    window.removeEventListener('resize', this.handleResize)
  }

  // Method for handling a resize.
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
    store.selectedSection.id = item.id
    this.forceUpdate()
  }

  render() {
    // Render for desktop
    if (window.innerWidth > 735) {
      return (
        <div>
          <Drawer open={true} selectSection={this.selectSection} width={"30%"}/>

          <AppBar openDrawer={this.openDrawer} selectedSection={store.selectedSection.id} style={{
            paddingLeft: "30%",
            position: "fixed",
            top: 0
          }} titleStyle={{
            paddingLeft: "25px",
            fontSize: 18
          }} showMenuIconButton={false}/>

          <Body style={{
            paddingLeft: "30%",
            paddingTop: "70px"
          }} selectedSection={store.selectedSection.id}/>
        </div>
      )

    // Render for smartphone
    } else {
      return (
        <div>
          <Drawer closeDrawer={this.closeDrawer} open={this.state.drawerOpen} selectSection={this.selectSection} docked={false}/>

          <AppBar openDrawer={this.openDrawer} selectedSection={store.selectedSection.id} style={{
            position: "fixed",
            top: 0
          }} titleStyle={{
            fontSize: 18
          }}
          />

          <Body style={{
            paddingTop: "70px"
          }} selectedSection={store.selectedSection.id}/>
        </div>
      )
    }
  }
}

export default App
