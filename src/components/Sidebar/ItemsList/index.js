import React from 'react';
import { isEmpty } from 'lodash';
import { AddItem } from "../AddItem";

const Item = ({item, list}) => {
    return (
        <li>
            <div className='item-name-holder'>
                <span className='item-name'>{ item.name }</span>
                <button type="submit">+</button>
            </div>
            <ItemsList items={list} parentId={item.id} />
        </li>
    )
};

const ItemsList = ({items, parentId}) => {
    console.log(parentId);

    if (isEmpty(items)) {
        return null;
    }
    return (
        <ul className="items-list">
            { items.filter(el => el.parent === parentId).map(item => (
                <Item key={item.id} item={item} list={items}/>
            )) }
        </ul>
    )
};

ItemsList.defaultProps = {
    items: [],
    parentId: null
};

export default ItemsList;