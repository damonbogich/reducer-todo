import React, {useState, useReducer} from 'react';
import './App.css';
import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';





function App() {
  return (
    <div className="App">
      <TodoList/>
      <TodoForm/>
    </div>
  );
}

export default App;
