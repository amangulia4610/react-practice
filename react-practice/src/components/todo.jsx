import React, { use } from "react";
import { useState } from "react";

const todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const updateTodo = () => {
    if (input.trim() === "") {
      alert("Please enter a task");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
    console.log("Todo added:", newTodo);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateTodo();
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1>Todo List</h1>
        <input
          type="text"
          style={{ width: "300px", padding: "10px", marginRight: "10px" }}
          value={input}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
    
        <button onClick={() => updateTodo()}>Add</button>
        <br />
        <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                  {todo.text}
                </span>
                <button onClick={() => {
                  setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
                }}>
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => {
                  setTodos(todos.filter(t => t.id !== todo.id));
                }}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default todo;
