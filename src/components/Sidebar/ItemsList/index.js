import React from 'react';
import { Link } from "react-router-dom";
import { isEmpty, noop } from 'lodash';

const Item = ({item, list, openPopup}) => {
    return (
        <li>
            <div className='item-name-holder'>
                <Link to={`/category/${item.id}`}>
                    <span className='item-name'>{ item.name }</span>
                </Link>
                <button data-id={item.id} onClick={openPopup} type="button">+</button>
            </div>
            <ItemsList items={list} parentId={item.id} openPopup={openPopup} />
        </li>
    )
};

const ItemsList = ({items, parentId, openPopup}) => {

    if (isEmpty(items)) {
        return null;
    }

    return (
        <ul className="items-list">
            { items.filter(el => el.parent === parentId).map(item => (
                <Item key={item.id} item={item} list={items} openPopup={openPopup}/>
            )) }
        </ul>
    )
};

ItemsList.defaultProps = {
    items: [],
    parentId: null,
    addChildren: noop
};

export default ItemsList;