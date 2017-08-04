import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'

class customAppBar extends Component {
  render() {
    return (
      <AppBar
        onLeftIconButtonTouchTap={this.props.openDrawer}
        onTitleTouchTap={this.props.openDrawer}
        title={this.props.selectedItem}
        titleStyle={this.props.titleStyle}
        style={this.props.style}
        showMenuIconButton={this.props.showMenuIconButton}
      />
    )
  }
}

export default customAppBar
