import React, { Component } from 'react';
import ItemsList from './ItemsList';
import { AddItem } from './AddItem';
import AddPopup from '../AddPopup';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopupVisible: false,
            parentToAdd: null,
            categories: [
                {id: 1, name: 'React', parent: null},
                {id: 2, name: 'Vue', parent: 1},
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

    openPopup (e) {
        const parentToAdd = parseInt(e.target.getAttribute('data-id'));

        this.setState(state => {
            return {
                ...state,
                isPopupVisible: true,
                parentToAdd
            }
        });
    }

    closePopup () {
        this.setState(state => {
            return {
                ...state,
                isPopupVisible: false,
            }
        });
    }

    render() {
        return (
            <aside className={this.props.isOpened ? "site-sidebar opened" : "site-sidebar"}>
                <AddItem addCategory={this.addCategory.bind(this)} />
                <ItemsList items={this.state.categories} openPopup={this.openPopup.bind(this)} />
                <AddPopup closePopup={this.closePopup.bind(this)} parent={this.state.parentToAdd} isVisible={this.state.isPopupVisible} addCategory={this.addCategory.bind(this)} />
            </aside>
        );
    }
}



export default Sidebar;
