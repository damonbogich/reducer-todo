import React, {useState, useReducer} from 'react';
import {completedReducer, initialStateObject} from '../reducers/reducer';
import Todo from './Todo';


const TodoList = () => {
    const [state, dispatch] = useReducer(completedReducer, initialStateObject);
    const [addItem, setAddItem] = useState('');
    console.log(state)

    // const handleChanges = e => {
    //     setNewTodo(e.target.value)
    // };
    
    return (
        <div>
            {state.map(item => (
            <Todo
            key = {item.id}
            item = {item.item} 
            completed = {item.completed}/>
            ))}
            {/* <button onClick={() =>
            dispatch({type: 'ADD_ITEM', payload: newTodo})} ></button> */}
        </div>

    )

}

export default TodoList;