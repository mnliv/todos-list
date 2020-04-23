import React from 'react';

function TodoItem(props) {
    return(
        <div className="TodoItem">
            <p> {props.title} </p>
        </div> 
    );
}

export default TodoItem;