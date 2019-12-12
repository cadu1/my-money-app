import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabContent extends Component {
  render() {
    const isSelected = this.props.tab.selected === this.props.id
    return (
      <div
        role='tabpanel'
        className={isSelected ? 'tab-pane active' : 'tab-pane'}
        id={this.props.id}
      >
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({ tab: state.tab});

export default connect(mapStateToProps)(TabContent)