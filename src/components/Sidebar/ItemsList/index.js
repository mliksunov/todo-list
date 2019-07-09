import React from 'react';
import { isEmpty } from 'lodash';
import { noop } from 'lodash';

const Item = ({item, list, openPopup}) => {
    return (
        <li>
            <div className='item-name-holder'>
                <span className='item-name'>{ item.name }</span>
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