import React, { Component, useEffect } from 'react';
import './MarkedItem.scss';

function MarkedItem(props) {
    let query = new RegExp(props.query, "gi");
    let { item } = props;
    const marker = (item, query) => {
        if (query !== '') {
            return item.replace(query, (match) => {
                return `<span className="marker">${match}</span>`
            });
        }
        return item;
    }
    return (
        <li className="markedItem" dangerouslySetInnerHTML={{ __html: marker(item, query) }}>
        </li>



    );
}

export default MarkedItem;