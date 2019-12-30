import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Message from '../common/message/message';

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            <Routes></Routes>
        </div>
        <Footer />
        <Message />
    </div>
)