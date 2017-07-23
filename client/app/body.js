import React, {Component} from 'react'
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'

class Body extends Component {
  createCards() {
    if(!this.props.selectedItem) return null

    const selectedItem = resume[this.props.selectedItem]

    // Create cards depending on selected item
    const cards = Object.keys(selectedItem).map((key) => {
      // Inner function for creating title to the card
      const createTitle = () => {
        return (<CardTitle title={key} />)
      }

      // Inner function for creating the body of the card
      const createContent = () => {
        // Create every subtitle
        const content = Object.keys(selectedItem[key]).map((subKey) => {
          return (
            <CardText key={subKey}>
              <b>{subKey}</b>
              <br/>
              {selectedItem[key][subKey]}
            </CardText>
          )
        })

        return content
      }

      // Wrap title and content
      return (
        <div key={key}>
          <Card style={{margin: "15px"}} >
            {createTitle()}
            <Divider />
            {createContent()}
          </Card>
        </div>
      )
    })

    // Return the list of cards
    return cards

    // return (
    //   <Card>
    //     <CardHeader title={this.props.selectedItem} subtitle="Subtitle" actAsExpander={true} showExpandableButton={true}/>
    //     <CardActions>
    //       <FlatButton label="Action1"/>
    //       <FlatButton label="Action2"/>
    //     </CardActions>
    //     <CardText expandable={true}>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    //     </CardText>
    //   </Card>
    // )
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
