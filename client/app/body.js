import React, {Component} from 'react'
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'

class Body extends Component {
  createCards() {
    // Return if selectedItem is null
    if (!this.props.selectedItem)
      return

    const selectedSection = resume[this.props.selectedItem]
    const cards = Object.keys(selectedSection).map((cardTitle) => {
      const item = selectedSection[cardTitle]

      const createContent = () => {
        const content = item.map((line, i) => {
          const lineKey = Object.keys(line)[0]
          const lineValue = line[lineKey]

          // Subtitle
          if (lineKey == "subtitle") {
            return (
              <div key={content+lineKey+lineValue+i}>
                <CardText style={{"paddingBottom": "0px"}}>
                  <b>{lineValue}</b>
                </CardText>
              </div>
            )

            // Text
          } else if (lineKey == "text") {
            return (
              <div key={content+lineKey+lineValue+i}>
                <CardText
                  style={{
                    "paddingTop": "5px",
                    "marginBottom": "5px"
                  }}
                >
                  {lineValue}
                </CardText>
              </div>
            )

            // Title
          } else if (lineKey == "title") {
            return (
              <div key={content+lineKey+lineValue+i}>
                <CardTitle title={lineValue}/>
                <Divider/>
              </div>
            )

            // Progressbar
          } else if (lineKey == "progressbar") {
            return (
              <div key={content+lineKey+lineValue+i}>
                progressbar:{lineValue}
              </div>
            )

            // Link
          } else if (lineKey == "link") {
            return (
              <div key={content+lineKey+lineValue+i}>
                link:{lineValue}
              </div>
            // Should never occur
            )
          } else {
            console.log("unknown lineKey")
            return null
          }
        })

        return content
      }

      const card = (
        <Card key={cardTitle} style={{
          "margin": "7px"
        }}>
          {createContent()}
        </Card>
      )

      return card
    });

    return cards
  }

  DEPRECATEDcreateCards() {
    if (!this.props.selectedItem)
      return null

    const selectedItem = resume[this.props.selectedItem]

    // Create cards depending on selected item
    const cards = Object.keys(selectedItem).map((key) => {
      // Inner function for creating title to the card
      const createTitle = () => {
        return (<CardTitle title={key}/>)
      }

      // Inner function for creating the body of the card
      const createContent = () => {
        // Create every subtitle
        const content = Object.keys(selectedItem[key]).map((subKey) => {
          return (
            <CardText key={subKey}>
              <b>{subKey}</b>
              <br/> {selectedItem[key][subKey]}
            </CardText>
          )
        })

        return content
      }

      // Wrap title and content
      return (
        <div key={key}>
          <Card style={{
            margin: "15px"
          }}>
            {createTitle()}
            <Divider/> {createContent()}
          </Card>
        </div>
      )
    })

    // Return the list of cards
    return cards
  }

  render() {
    return (
      <div>
        {this.createCards()}
      </div>
    )
  }
}

export default Body
