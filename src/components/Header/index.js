import React from 'react';
import logo from './logo.png'
import {sidebarToggle} from "../../actions";

const Header = props => {
    const { common } = props;

    const toggleSidebar = () => {
        props.dispatch(sidebarToggle(!common.isSidebarOpened))
    };

    return (
        <header className='site-header'>
            <button className='button' onClick={toggleSidebar}>{common.isSidebarOpened ? '-' : '+'}</button>
            <img width='180' src={logo} alt="logo"/>
        </header>
    );
}

export default Header;
