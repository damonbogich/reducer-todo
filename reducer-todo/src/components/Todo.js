import React from 'react';
import {completedReducer} from '../reducers/reducer';

const Todo = props => {
    console.log(props.item);
    return (

        <p className = {props.completed ? "completed": ""} onClick = {() => props.dispatch({type: "TOGGLE_STATE", payload: props.item})}> 
            {props.todo}
        </p>
    )
}

export default Todo;