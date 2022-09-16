import React, { useState } from "react";

const Todo = ({ id, todo, handleRemove, updateTodo }) => {
  const [editTodo, setEditTodo] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);

  const edit = (e) => {
    setIsEdit((edit) => !edit);
  };

  const handleChange = (e) => {
    setEditTodo(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateTodo(id, editTodo);
    setIsEdit(false);
  };

  const remove = () => handleRemove(id);

  if (isEdit) {
    return (
      <div>
        <form onSubmit={handleEdit}>
          <input type="text" value={editTodo} onChange={handleChange} />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    return (
      <ul style={{ listStyle: "none" }}>
        <li>
          {todo}
          <button onClick={edit}>Edit</button>
          <button onClick={remove}>X</button>
        </li>
      </ul>
    );
  }
};

export default Todo;
