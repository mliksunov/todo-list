import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

import { categoriesConnector } from "./connectors/categories";
import {MainContent} from "./routes";

const SidebarWithCategories = categoriesConnector(Sidebar);

const App = props => {
    return (
        <div className="App">
            <Header {...props} />
            <div className="main">
                <SidebarWithCategories {...props} />
                <main className='site-content'>
                    <MainContent />
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default App;
