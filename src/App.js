import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filter: 'all', // active, complete
      currentText: '',
      itemActive: 0,
      itemComplete: 0,
      todos: [],
      filterTodos: []
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filter = this.filter.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  onClickFinish(item) {
    return (event) => {
      const isComplete = item.isComplete;
      let currentItemComplete = 0;
      let currentItemActive = 0;
      if(isComplete) {
        currentItemComplete = this.state.itemComplete - 1;
        currentItemActive= this.state.itemActive + 1;
      }
      else{
        currentItemActive= this.state.itemActive - 1;
        currentItemComplete = this.state.itemComplete + 1;
      }
      const index = this.state.todos.indexOf(item);
      this.setState({
        ...this.state,
        itemComplete: currentItemComplete,
        itemActive: currentItemActive,
        todos: [
          ...this.state.todos.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...this.state.todos.slice(index + 1)
        ]
      })
    }
  }

  onClickClose(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const index = this.state.todos.indexOf(item);
      if(isComplete){
        this.setState({
          ...this.state,
          itemComplete: this.state.itemComplete -1,
          todos: [
            ...this.state.todos.slice(0, index),
            ...this.state.todos.slice(index + 1)
          ]
        })
      }
      else{
        this.setState({
          ...this.state,
          itemActive: this.state.itemActive -1,
          todos: [
            ...this.state.todos.slice(0, index),
            ...this.state.todos.slice(index + 1)
          ]
        })
      }
    }
  }

  onKeyUp(event) {
    if(event.keyCode === 13)
    {
      let text = event.target.value;
      if(!text){
        return;
      }
      text = text.trim();
      if(!text){
        return;
      }
      this.setState({
        ...this.state,
        currentText: '',
        itemActive: this.state.itemActive + 1,
        todos: [
          ...this.state.todos,
          {
            title: text,
            isComplete: false
          }
        ]
      })
    }
  }

  onChange(event){
      this.setState(
        {
          ...this.state,
          currentText: event.target.value
        }
      )
  }

  filter(state) {
    return (event) => {
      this.setState({
        ...this.state,
        filter: state
      })  
    }
  }

  clearCompleted() {
    let newTodos = this.state.todos.filter((item) => {
      if(!item.isComplete)
        return item;
    })
    this.setState({
      ...this.state,
      itemComplete: 0,
      todos: newTodos
    })
  }

  render() {
    return(
      <div className="App">
        <h1>Todos</h1>
        <div className="Header">
          <img src={tick} width={32} height={32}></img>
          <input type="text" placeholder="Add a new item..." value={this.state.currentText} onChange={this.onChange} onKeyUp = {this.onKeyUp}></input> 
        </div>
        {
          this.state.todos.filter((item) => {
            if(this.state.filter ==='all') return item;
            else if(this.state.filter === 'active') {
              if(!item.isComplete) return item;
            }
            else {
              if(item.isComplete) return item;
            } 
          }).map((item, index) => 
          <TodoItem key={index} item={item} onClickFinish={this.onClickFinish(item)} onClickClose={this.onClickClose(item)} filter={this.state.filter}></TodoItem>
        ) 
        }
        <div className="footer">
        <div className="countItemLeft">{this.state.itemActive} item{this.state.itemActive > 1 && 's'} left</div>
        <div className="groupBtn">
          <button className="btn" onClick={this.filter('all')}>All</button>
          <button className="btn" onClick={this.filter('active')}>Active</button>
          <button className="btn" onClick={this.filter('completed')}>Completed</button>
        </div>
        <div className="clearCompeleted">
          <button className="btn" onClick={this.clearCompleted}>Clear Completed[{this.state.itemComplete}]</button>
        </div>
      </div>  
    </div>
    )
  }
}

export default App;
