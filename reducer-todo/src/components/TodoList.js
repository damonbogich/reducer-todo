import React, {useState, useReducer} from 'react';
import Todo from './Todo';

//need to get rid of state, dispatch and need to add

const TodoList = props => {
    console.log(props);
    // const toggleItem = id => {
    //     props.state.data.map(todo => {
    //         if (todo.id === id ) {
    //             return {
    //                 ...todo,
    //                 completed: ! todo.completed
    //             };
    //         } else {
    //             return todo;
    //         }
    //     })
    // }

    return (
        <div>
            {props.state.data.map(item => (
            <Todo
            key = {item.id}
            todo = {item.todo} 
            item = {item}
            completed = {item.completed}
            dispatch = {props.dispatch}
            completedReducer = {props.completedReducer}
            // toggleItem = {toggleItem}
            />
            ))}
            {/* <button onClick={() =>
            dispatch({type: 'ADD_ITEM', payload: newTodo})} ></button> */}
        </div>

    )

}

export default TodoList;