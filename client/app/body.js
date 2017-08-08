import React, {Component} from 'react'
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import LinearProgress from 'material-ui/LinearProgress'

class Body extends Component {
  // Function returning an array of cards with content.
  createCards() {
    // Return null if selectedItem is null.
    if (!this.props.selectedItem) return null

    // Selected section, e.g. "Intro", "Skills", "Experience".
    const selectedSection = resume[this.props.selectedItem]

    // Array of cards with content.
    const cards = Object.keys(selectedSection).map((cardIndex) => {
      const lineCommandValuePair = selectedSection[cardIndex]

      const createContent = () => {
        const content = lineCommandValuePair.map((line, i) => {
          const lineCommand = Object.keys(line)[0]
          const lineValue = line[lineCommand]

          // Return content depending on lineCommand.
          switch (lineCommand) {
            case "subtitle":
              return (
                <div key={content+lineCommand+lineValue+i}>
                  <CardText
                    style={{
                      paddingBottom: "0px",
                      paddingTop: "30px"
                    }}
                  >
                    <b>{lineValue}</b>
                  </CardText>
                </div>
              )

            case "text":
              return (
                <div key={content+lineCommand+lineValue+i}>
                  <CardText
                    style={{
                      "paddingTop": "6px",
                      "paddingBottom": "6px"
                    }}
                  >
                    {lineValue}
                  </CardText>
                </div>
              )

            case "title":
              return (
                <div key={content+lineCommand+lineValue+i}>
                  <CardTitle title={lineValue}/>
                  <Divider/>
                </div>
              )

            case "progressbar":
              return (
                <div
                  key={content+lineCommand+lineValue+i}
                  style={{
                    padding: "15px",
                    maxWidth: "400px"
                  }}
                >
                  <LinearProgress
                    mode="determinate"
                    value={lineValue}
                  />
                </div>
              )

            case "link":
              return (
                <div key={content+lineCommand+lineValue+i}>
                  link:{lineValue}
                </div>
              )

            default:
              console.log(
                "WARNING: Unknown lineCommand: " + lineCommand
              )

              return (
                <div key={content+lineCommand+lineValue+i} />
              )
            }
          })

        return content
      }

      const card = (
        <Card
          key={cardIndex}
          style={{
            margin: "10px",
            paddingBottom: "20px"
          }}
        >
          {createContent()}
        </Card>
      )

      return card
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
