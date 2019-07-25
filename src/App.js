import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

import { categoriesConnector } from "./connectors/categories";

const SidebarWithCategories = categoriesConnector(Sidebar);

const App = props => {
    return (
        <div className="App">
            <Header {...props} />
            <div className="main">
                <SidebarWithCategories {...props} />
                <Main />
            </div>
            <Footer />
        </div>
    )
};

export default App;
