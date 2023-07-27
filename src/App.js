// src/App.js
import React from 'react';
import TodoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';

const App = () => {
  return (
    <div className="container text-center">
      <div className='row'>
        	<div className='col-sm'></div>
          <div className='col-sm'>
            <h1>ToDo List</h1>
            <TodoForm />
            <TodoList />
          </div>
        <div className='col-sm'></div>
      </div>
    </div>
  );
};

export default App;
