import React, {Component} from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpened: true
        }
    }

    toggleSidebar = () => {
        this.setState(state => ({
            ...state,
            sidebarOpened: !state.sidebarOpened
        }))
    };

    render() {
        return (
            <div className="App">
                <Header toggleSidebar={this.toggleSidebar} isSidebarOpened={this.state.sidebarOpened} />
                <div className="main">
                    <Sidebar isOpened={this.state.sidebarOpened} />
                    <Main />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
