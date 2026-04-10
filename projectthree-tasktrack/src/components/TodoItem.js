function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="todo-item">
      <span className={todo.completed ? "todo-text completed" : "todo-text"}>
        {todo.text}
      </span>

      <div className="todo-buttons">
        <button onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>

        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;