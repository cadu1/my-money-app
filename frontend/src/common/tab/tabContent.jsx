import React, { Component } from 'react'
import { connect } from 'react-redux'

import If from '../helper/test'

class TabContent extends Component {
  render() {
    const isSelected = this.props.tab.selected === this.props.id
    const canShow = this.props.tab.visible[this.props.id]

    return (
      <If test={canShow}>
        <div
          role='tabpanel'
          className={isSelected ? 'tab-pane active' : 'tab-pane'}
          id={this.props.id}>
          {this.props.children}
        </div>
      </If>
    )
  }
}

const mapStateToProps = state => ({ tab: state.tab, visible: state.tab.visible });

export default connect(mapStateToProps)(TabContent)