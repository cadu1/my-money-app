import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectTab } from './tabActions'
import If from '../helper/test'

class TabHeader extends Component {
  render() {
    const isSelected = this.props.tab.selected === this.props.target
    const canShow = this.props.tab.visible[this.props.target]

    return (
      <If test={canShow}>
        <li className={isSelected ? 'active' : ''}>
          <a href='javascript:;'
            data-toggle='tab'
            data-target={this.props.target}
            onClick={() => this.props.selectTab(this.props.target)}
          >
            <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
          </a>
        </li>
      </If>
    )
  }
}

const mapStateToProps = state => ({ tab: state.tab, visible: state.tab.visible });
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)