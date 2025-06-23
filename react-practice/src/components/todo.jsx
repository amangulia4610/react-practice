import React, { use } from "react";
import { useState } from "react";

// Todo component
const todo = () => {
    // State for input field
    const [input, setInput] = useState("");
    // State for list of todos
    const [todos, setTodos] = useState([]);

    // Function to add a new todo
    const updateTodo = () => {
        if (input.trim() === "") {
            alert("Please enter a task");
            return;
        }
        const newTodo = {
            id: Date.now(), // Unique id for each todo
            text: input,
            completed: false,
        };
        setTodos([...todos, newTodo]); // Add new todo to list
        setInput(""); // Clear input field
        console.log("Todo added:", newTodo);
    };

    // Handle Enter key press in input
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            updateTodo();
        }
    };

    return (
        <>
            <div className="todo-container">
                <h1>Todo List</h1>
                {/* Input field for new todo */}
                <input
                    type="text"
                    style={{ width: "300px", padding: "10px", marginRight: "10px" }}
                    value={input}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                />
                {/* Button to add todo */}
                <button onClick={() => updateTodo()}>Add</button>
                <br />
                <ul>
                    {/* Render list of todos */}
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {/* Todo text with line-through if completed */}
                            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                                {todo.text}
                            </span>
                            {/* Button to toggle completed state */}
                            <button onClick={() => {
                                setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
                            }}>
                                {todo.completed ? "Undo" : "Complete"}
                            </button>
                            {/* Button to delete todo */}
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
