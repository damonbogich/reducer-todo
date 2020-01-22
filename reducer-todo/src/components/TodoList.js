import React, {useState, useReducer} from 'react';
import Todo from './Todo';

//need to get rid of state, dispatch and need to add

const TodoList = props => {
    console.log(props);
    
    
    return (
        <div>
            {props.state.data.map(item => (
            <Todo
            key = {item.id}
            todo = {item.todo} 
            completed = {item.completed}/>
            ))}
            {/* <button onClick={() =>
            dispatch({type: 'ADD_ITEM', payload: newTodo})} ></button> */}
        </div>

    )

}

export default TodoList;