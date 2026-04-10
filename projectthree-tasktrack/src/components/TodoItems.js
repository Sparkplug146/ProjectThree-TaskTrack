function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;