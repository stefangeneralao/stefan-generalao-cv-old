import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import LinearProgress from 'material-ui/LinearProgress'
import Card from './card'
import Footer from './footer'

class Body extends Component {
  // Return false if this.props.selectedSection is null.
  hasSelectedItem() {
    return this.props.selectedSection != null
  }

  // Function returning an array of content with content.
  createContent() {
    // Return null if selectedSection is null.
    if (!this.hasSelectedItem())
      return null

    // Filter out content according to selected section.
    const filteredContent = []
    store.content.allIds.forEach((cardKey) => {
      const focusCard = store.content.byId[cardKey]
      if(focusCard.section === store.selectedSection.id) {
        filteredContent.push(focusCard)
      }
    })

    // Parse filteredContent into array of content.
    const content = filteredContent.map((rawCard) => {
      return (<Card key={rawCard.id} content={rawCard.content} />)
    })

    return content
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.createContent()}
        <Footer />
      </div>
    )
  }
}

export default Body
