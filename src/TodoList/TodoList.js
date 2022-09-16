import React, { useState } from "react";
import NewTodoListForm from "../NewTodoListForm/NewTodoListForm";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((todoList) => [...todoList, { ...newTodo }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: updatedTodo } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>TodoList</h1>
      <NewTodoListForm addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            todo={todo.todo}
            handleRemove={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
