import React, { useState } from "react";


const TodoForm = props => {
    console.log(props);
    const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <input
        className="new-todo"
        type="text"
        name="newtodo"
        value={newTodo}
        onChange={handleChanges}
      />
      <button
        type="button"
        onClick = {() => props.dispatch({type: "ADD_TODO", payload: newTodo})}
      >
        Add item
      </button>
      <button type="button"
      onClick = {() => props.dispatch({type: "CLEAR_COMPLETED", payload: props.item })}>
          clear completed

      </button>
    </div>
  );
};
export default TodoForm;
