import React, { Component } from 'react';
import ItemsList from './ItemsList';
import { AddItem } from './AddItem';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentToAdd: null,
            categories: [
                {id: 1, name: 'React', parent: null},
                {id: 2, name: 'Vue', parent: null},
                {id: 3, name: 'Angular', parent: 4},
                {id: 4, name: 'Backbone', parent: 5},
                {id: 5, name: 'Knockout', parent: 1}
            ]
        }
    }

    addCategory (name, parent) {
        this.setState(state => {
           const newCategories = state.categories.slice();

           if (name.length) {
               newCategories.push({
                   id: state.categories[state.categories.length - 1].id + 1,
                   name,
                   parent
               });
           }

            return {
                ...state,
                categories: newCategories
            }
        });
    }

    render() {
        return (
            <aside className={this.props.isOpened ? "site-sidebar opened" : "site-sidebar"}>
                <AddItem addCategory={this.addCategory.bind(this)} />
                <ItemsList items={this.state.categories} />
            </aside>
        );
    }
}



export default Sidebar;
