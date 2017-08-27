import React, {Component} from 'react'
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import LinearProgress from 'material-ui/LinearProgress'


const parseContent = (contentArray) => {
  const content = contentArray.map((content, index) => {
    const lineCommand = Object.keys(content)[0]
    const lineValue = content[lineCommand]

    // Return content depending on lineCommand.
    switch (lineCommand) {
      case "subtitle":
        return (
          <div key={index}>
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
          <div key={index}>
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
          <div key={index}>
            <CardTitle title={lineValue}/>
            <Divider/>
          </div>
        )

      case "progressbar":
        return (
          <div key={index} style={{
            padding: "15px",
            maxWidth: "400px"
          }}>
            <LinearProgress mode="determinate" value={lineValue}/>
          </div>
        )

      case "link":
        return (
          <div key={index}>
            <a href={lineValue}>
              <CardText style={{
                "paddingTop": "6px",
                "paddingBottom": "6px"
              }}>
                {lineValue}
              </CardText>
            </a>
          </div>
        )

      default:
        console.warn("Unknown lineCommand: " + lineCommand)
	return (<div key={index}/>)
    }
  })

  return content
}

class CustomCard extends Component {
  render() {
    const card = (
      <Card style={{
        margin: "10px",
        paddingBottom: "20px"
      }} zDepth={1}
      >
        {parseContent(this.props.content)}
      </Card>
    )

    return card
  }
}

export default CustomCard
