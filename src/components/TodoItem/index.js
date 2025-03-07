const TodoItems = props => {
  const {
    todoItem,
    deleteTodo,
    toggleComplete,
    startEditing,
    saveEdit,
    handleEditChange,
    editingId,
    editedTitle,
  } = props
  const {id, title, completed} = todoItem

  return (
    <li className="todoItem">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      {editingId === id ? (
        <input
          type="text"
          value={editedTitle}
          onChange={handleEditChange}
          className="input-box"
          aria-label="edit-todo"
        />
      ) : (
        <p className={`para ${completed ? 'completed' : ''}`}>{title}</p>
      )}
      <button
        className="delete-btn"
        type="button"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
      {editingId === id ? (
        <button className="add-btn" type="button" onClick={() => saveEdit(id)}>
          Save
        </button>
      ) : (
        <button
          className="delete-btn"
          type="button"
          onClick={() => startEditing(id, title)}
        >
          Edit
        </button>
      )}
    </li>
  )
}

export default TodoItems
