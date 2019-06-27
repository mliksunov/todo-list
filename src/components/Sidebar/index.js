import React, { Component } from 'react';
import ItemsList from './ItemsList';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpened: true,
            categories: [
                {id: 1, name: 'React', parent: null},
                {id: 2, name: 'Vue', parent: null},
                {id: 3, name: 'Angular', parent: 4},
                {id: 4, name: 'Backbone', parent: 5},
                {id: 5, name: 'Knockout', parent: 1}
            ]
        }
    }

    render() {
        return (
            <aside className={this.props.isOpened ? "site-sidebar opened" : "site-sidebar"}>
                <ItemsList items={this.state.categories} />
            </aside>
        );
    }
}

export default Sidebar;
