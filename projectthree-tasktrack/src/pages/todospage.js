import { useState } from "react";
import TodoForm from "../components/TodoForm";
import FilterButtons from "../components/FilterButtons";
import TodoList from "../components/TodoList";
import "./TodosPage.css";

function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  function toggleComplete(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function getFilteredTodos() {
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    } else if (filter === "incomplete") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  }

  return (
    <div className="todos-page">
      <h1>Manage Your Tasks</h1>

      <div className="top-section">
        <div className="left-panel">
          <h2>Add a Task</h2>
          <TodoForm addTodo={addTodo} />
        </div>

        <div className="right-panel">
          <h2>Filter Tasks</h2>
          <FilterButtons filter={filter} setFilter={setFilter} />
        </div>
      </div>

      <div className="list-section">
        <h2>Your Tasks</h2>
        <TodoList
          todos={getFilteredTodos()}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default TodosPage;