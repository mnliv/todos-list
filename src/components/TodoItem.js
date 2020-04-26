import React from 'react';
import './TodoItem.css';
import checkImg from'../img/check.svg';
import checkCompleteImg from'../img/check-complete.svg';
import close from '../img/close.svg'

class TodoItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let className = 'TodoItem';
        let url = checkImg;
        if(this.props.item.isComplete) {
            className += ' TodoItem-complete'
            url = checkCompleteImg;
        }
        return(            
            <div className={className}>
                <img src={url} width={32} onClick={this.props.onClickFinish}></img>
                <p>{this.props.item.title}</p>
                <img src={close} width={16} className="close" onClick={this.props.onClickClose}></img>
            </div>
        );
    }
}

export default TodoItem;