import React from 'react';

function TableItem(props) {
    return(
        <tr>
            <td> {props.company}</td>
            <td> {props.contact}</td>
            <td> {props.country}</td>
        </tr>
    );
} 

export default TableItem;