import React, {Component} from 'react'
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import LinearProgress from 'material-ui/LinearProgress'

const parseContent = (contentArray) => {
  return contentArray.map((content, i) => {
    const lineCommand = Object.keys(content)[0]
    const lineValue = content[lineCommand]

    // Return content depending on lineCommand.
    switch (lineCommand) {
      case "subtitle":
        return (
          <div key={i}>
            <CardText style={{
              paddingBottom: "0px",
              paddingTop: "30px"
            }}>
              <b>{lineValue}</b>
            </CardText>
          </div>
        )

      case "text":
        return (
          <div key={i}>
            <CardText style={{
              "paddingTop": "6px",
              "paddingBottom": "6px"
            }}>
              {lineValue}
            </CardText>
          </div>
        )

      case "title":
        return (
          <div key={i}>
            <CardTitle title={lineValue}/>
            <Divider/>
          </div>
        )

      case "progressbar":
        return (
          <div key={i} style={{
            padding: "15px",
            maxWidth: "400px"
          }}>
            <LinearProgress mode="determinate" value={lineValue}/>
          </div>
        )

      case "link":
        console.warn("Command \"link\" not ready")
        return (
          <div key={i}>
            link:{lineValue}
          </div>
        )

      default:
        console.warn("Unknown lineCommand: " + lineCommand)
        return (<div key={i}/>)
    }
  })
}

class CustomCard extends Component {
  render() {
    const card = (
      <Card style={{
        margin: "10px",
        paddingBottom: "20px"
      }}>
        {parseContent(this.props.content)}
      </Card>
    )

    return card
  }
}

export default CustomCard
