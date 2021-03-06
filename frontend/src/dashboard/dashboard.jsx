import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import { getSummary } from '../dashboard/dashboardActions'

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    const { credit, debit } = this.props.summary
    let roundedCredit = parseFloat(credit).toFixed(2)
    let roundedDebit = parseFloat(debit).toFixed(2)

    return (
      <div>
        <ContentHeader title='Dashboard' small='versão 1.0'></ContentHeader>
        <Content>
          <div className='row'>
            <ValueBox
              cols='12 4'
              color='green'
              icon='bank'
              value={`R$ ${roundedCredit}`}
              text='Total de Créditos'
            ></ValueBox>
            <ValueBox
              cols='12 4'
              color='red'
              icon='credit-card'
              value={`R$ ${roundedDebit}`}
              text='Total de Débitos'
            ></ValueBox>
            <ValueBox
              cols='12 4'
              color='blue'
              icon='money'
              value={`R$ ${roundedCredit - roundedDebit}`}
              text='Valor Consolidado'
            ></ValueBox>
          </div>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispachToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispachToProps)(Dashboard)