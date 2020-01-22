import React, {useState, useReducer} from 'react';
import {completedReducer, initialStateObject} from '../reducers/reducer';
import Todo from './Todo';

//need to get rid of state, dispatch and need to add

const TodoList = () => {
    const [state, dispatch] = useReducer(completedReducer, initialStateObject);
    // const [addItem, setAddItem] = useState('');
    console.log(state)

    // const handleChanges = e => {
    //     setNewTodo(e.target.value)
    // };
    
    return (
        <div>
            {state.data.map(item => (
            <Todo
            key = {item.id}
            item = {item.todo} 
            completed = {item.completed}/>
            ))}
            {/* <button onClick={() =>
            dispatch({type: 'ADD_ITEM', payload: newTodo})} ></button> */}
        </div>

    )

}

export default TodoList;