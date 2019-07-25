import React from 'react';
import ItemsList from './ItemsList';
import { AddItem } from './AddItem';
import AddPopup from '../AddPopup';
import { addCategory } from "../../actions";

const Sidebar = props => {
    const {categories, common} = props;

    const addCategories = (name, parent) => {
        const newCategories = categories.slice();

        if (name.length) {
            newCategories.push({
                id: categories[categories.length - 1].id + 1,
                name,
                parent
            });
        }

        props.dispatch(addCategory(newCategories))
    };

    return (
        <aside className={common.isSidebarOpened ? "site-sidebar opened" : "site-sidebar"}>
            <AddItem addCategory={addCategories} />
            <ItemsList {...props} />
            <AddPopup {...props} addCategory={addCategories} />
        </aside>
    );
};

export default Sidebar;
