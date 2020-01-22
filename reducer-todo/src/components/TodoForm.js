import React, { useState, useReducer } from "react";
import { initialStateObject, completedReducer } from "../reducers/reducer";

const TodoForm = () => {
  const [state, dispatch] = useReducer(completedReducer, initialStateObject);
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
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: newTodo });
          console.log('hello');
        }}
      >
        Add item
      </button>
    </div>
  );
};
export default TodoForm;
