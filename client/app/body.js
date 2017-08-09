import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import LinearProgress from 'material-ui/LinearProgress'
import Card from './card'

class Body extends Component {
  // Return false if this.props.selectedSection is null.
  hasSelectedItem() {
    return this.props.selectedSection != null
  }

  // Function returning an array of cards with content.
  createCards() {
    // Return null if selectedSection is null.
    if (!this.hasSelectedItem())
      return null

      // Selected section, e.g. "Intro", "Skills", "Experience".
    const selectedSection = resume[this.props.selectedSection]

    // Array of cards with content.
    const cards = selectedSection.map((cardContent, i) => {
      const key = this.props.selectedSection + i

      return (<Card key={key} content={cardContent}/>)
    })

    return cards
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.createCards()}
      </div>
    )
  }
}

export default Body
