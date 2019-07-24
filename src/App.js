import React, {Component} from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);

        this.state = {
            sidebarOpened: true,
            tasks: [
                {id: 1, name: 'Do something', parentCategory: 2, description: 'task 1 desription'},
                {id: 2, name: 'Do something', parentCategory: 2, description: 'task 8 desription'},
                {id: 3, name: 'Do something', parentCategory: 2, description: 'task 7 desription'},
                {id: 4, name: 'Do something', parentCategory: 2, description: 'task 6 desription'},
                {id: 5, name: 'Do something', parentCategory: 2, description: 'task 5 desription'},
                {id: 6, name: 'Do something', parentCategory: 3, description: 'task 4 desription'},
                {id: 7, name: 'Do something', parentCategory: 3, description: 'task 4 desription'},
                {id: 8, name: 'Do something', parentCategory: 3, description: 'task 4 desription'},
                {id: 9, name: 'Do something', parentCategory: 3, description: 'task 4 desription'}
            ]
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
                    <Main tasks={this.state.tasks} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
