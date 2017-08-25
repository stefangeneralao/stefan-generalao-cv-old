import React, {Component} from 'react'
import MuiDrawer from 'material-ui/Drawer'
import {ListItem} from 'material-ui/List'
import Paper from 'material-ui/Paper'
import DrawerMenuItem from './drawerMenuItem'

class Drawer extends Component {
  constructor() {
    super()

    this.menuItemClickHandler = this.menuItemClickHandler.bind(this)
  }

  menuItemClickHandler(clickedItem) {
    if(this.props.closeDrawer) {
      this.props.closeDrawer()
    }

    this.props.selectSection(clickedItem)

    // Scroll window to top.
    window.scrollTo(0, 0)
  }

  createMenuList() {
    const getSubSections = (sectionKey) => {
      const subSectionsArray = []

      store.subSections.allIds.forEach((subSectionKey) => {
        if(store.subSections.byId[subSectionKey].parentSection === sectionKey) {
          subSectionsArray.push(
            <DrawerMenuItem
              key={subSectionKey}
              label={subSectionKey}
              onTouchTap={() => this.menuItemClickHandler(
                  store.subSections.byId[subSectionKey]
              )}
              subSection={true}
            />
          )
        }
      })

      return subSectionsArray
    }

    const list = store.sections.allIds.map((sectionKey) => {
      const section = store.sections.byId[sectionKey]
      const nestedItems = getSubSections(sectionKey)

      return (
        <DrawerMenuItem
          key={section.id}
          label={section.id}
          onTouchTap={() => this.menuItemClickHandler(section)}
          nestedItems={nestedItems}
        />
      )
    })

    return list
  }

  render() {
    return (
      <MuiDrawer
        open={this.props.open}
        width={this.props.width}
        docked={this.props.docked}
        onRequestChange={() => {this.props.closeDrawer()}}
        zDepth={3}
        disableSwipeToOpen={true}
      >
        {this.createMenuList()}
      </MuiDrawer>
    )
  }
}

export default Drawer
