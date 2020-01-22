import React, {useState, useReducer} from 'react';
import './App.css';
import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';
import {initialStateObject, completedReducer} from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(completedReducer, initialStateObject);
    console.log(completedReducer);
    console.log(state);

  return (
    <div className="App">
      <TodoList
      state = {state}
      dispatch = {dispatch}
      completedReducer = {completedReducer}
      />
      <TodoForm
      props = {completedReducer}
      dispatch = {dispatch}/>
    </div>
    //Now step 4: Toggle the completed field
      //Build a function that will dispatch an action to add a new todo
        //Done in reducer component... Not sure at all about my logic
      //Invoke this new function when I click on a todo
        //need to put something in todo component: going to try to pass completedReducer and dispatch through todolist and try to pass them from todolist to todo
  );
}

export default App;
