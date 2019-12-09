import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingClicle from '../billingCycle/billingCycle'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} ></Route>
    <Route path='/billingCycles' component={BillingClicle} />
    <Redirect from='*' to='/' />
  </Router>
)