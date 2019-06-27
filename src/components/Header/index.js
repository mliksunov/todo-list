import React from 'react';
import logo from './logo.png'

function Header ({toggleSidebar, isSidebarOpened}) {
    return (
        <header className='site-header'>
            <button onClick={toggleSidebar}>{isSidebarOpened ? '-' : '+'}</button>
            <img width='180' src={logo} alt="logo"/>
        </header>
    );
}

export default Header;
