import React from 'react';
import TableItem from './TableItem';
import TableHeader from './TableHeader';

function MyTable(props) {
    return(
        <div className="Table">
            <h2>React Table</h2>
            <table>
                <TableHeader></TableHeader>
                {
                  props.database.map((item, index) => <TableItem key={index} company={item.company} contact={item.contact} country={item.country}></TableItem>)
                }
            </table>
        </div> 
    );
}

export default MyTable;