import React, {Component} from 'react'
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import LinearProgress from 'material-ui/LinearProgress'

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

            // Text
          } else if (lineKey == "text") {
            return (
              <CardText
                key={content+lineKey+lineValue+i}
                style={{
                  "paddingTop": "6px",
                  "paddingBottom": "6px"
                }}
              >
                {lineValue}
              </CardText>
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
              <div key={content+lineKey+lineValue+i}
                style={{padding: "15px"}}>
                <LinearProgress
                  mode="determinate"
                  value={lineValue}
                />
              </div>
            )

            // Link
          } else if (lineKey == "link") {
            return (
              <div key={content+lineKey+lineValue+i}>
                link:{lineValue}
              </div>
            )

            // Should never occur
          } else {
            console.log("unknown lineKey")
            return null
          }
        })

        return content
      }

      const card = (
        <Card
          key={cardTitle}
          style={{
            margin: "10px",
            paddingBottom: "20px"
          }}
        >
          {createContent()}
        </Card>
      )

      return card
    });

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
