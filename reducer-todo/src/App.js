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
      state = {state}/>
      <TodoForm
      props = {completedReducer}
      dispatch = {dispatch}/>
    </div>
    //right now trying to pass the completedReducer with case ADD_TODO to the form, so that my form can add a todo.  I'm putting it in as props, but not sure how to call it over there.
      //first will try putting it in the onClick
        //when i click the button it seems to update my data array, but the item is showing up as undefined for some reason, so no new todos are on screen
  );
}

export default App;
