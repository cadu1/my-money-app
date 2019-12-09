import React from 'React'

export default props => (
  <header className='main-header'>
    <a href='#' className='logo'>
      <span className='logo-mini'><b>My</b> Money</span>
      <span className='logo-lg'>
        <i className='fa fa-money'></i> <b>My</b> Money
      </span>
    </a>
    <nav className='navbar navbar-static-top'>
      <a href='javascript:;' className='sidebar-toggle' data-toggle='offcanvas'></a>
    </nav>
  </header>
)