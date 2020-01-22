import React, { useState } from "react";


const TodoForm = props => {
    console.log(props);
    const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

// const addTodo = e => {
//     e.preventDefault();
//     props.dispatch.addTodo(newTodo);
//     setNewTodo({
//         todo: "",
//         completed: false,
//         id: new Date()
//     })
// } 

  return (
    <form>
      <input
        className="new-todo"
        type="text"
        name="newtodo"
        value={newTodo}
        onChange={handleChanges}
      />
      <button
        type="button"
        onClick = {() => props.dispatch({type: "ADD_TODO"})}
      >
        Add item
      </button>
    </form>
  );
};
export default TodoForm;
