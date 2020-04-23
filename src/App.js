import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import MyTable from './components/Table';
import TableItem from './components/TableItem';

function App() {
  let todoList = [
    'Di da bong',
    'Di hoc',
    'Di choi',
    'Di massage',
    'Di du lich'
  ];
  let table = [
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany'
    },
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico'
    },
    {
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria'
    },
    {
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK'
    },
    {
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada'
    },
    {
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy'
    }
  ];

  return (
    <div className="App">
      {
        todoList.map((item, index) => <TodoItem key={index} title={item}/>)
      }
      <MyTable database={table}></MyTable>
    </div>
  );
}

export default App;
