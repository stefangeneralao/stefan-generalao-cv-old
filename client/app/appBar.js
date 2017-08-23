import React, {Component} from 'react'
import MuiAppBar from 'material-ui/AppBar'

class AppBar extends Component {
  render() {
    return (
      <MuiAppBar
        onLeftIconButtonTouchTap={this.props.openDrawer}
        onTitleTouchTap={this.props.openDrawer}
        title={resume.selectedSection.id}
        titleStyle={this.props.titleStyle}
        style={this.props.style}
        showMenuIconButton={this.props.showMenuIconButton}
        zDepth={0}
      />
    )
  }
}

export default AppBar
