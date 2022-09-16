import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTodoListForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    todo: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData, id: uuidv4() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">New Todo</label>
      <input
        id="todo"
        type="text"
        name="todo"
        placeholder="Create a Todo"
        value={formData.todo}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default NewTodoListForm;
