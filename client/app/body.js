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

  // Function returning an array of cards with content.
  createCards() {
    // Return null if selectedSection is null.
    if (!this.hasSelectedItem())
      return null

    // Filter out cards according to selected section.
    const filteredCards = []
    resume.cards.allIds.forEach((cardKey) => {
      const focusCard = resume.cards.byId[cardKey]
      if(focusCard.section === resume.selectedSection.id) {
        filteredCards.push(focusCard)
      }
    })

    // Parse filteredCards into array of cards.
    const cards = filteredCards.map((rawCard) => {
      return (<Card key={rawCard.id} content={rawCard.content} />)
    })

    return cards
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.createCards()}
        <Footer />
      </div>
    )
  }
}

export default Body
