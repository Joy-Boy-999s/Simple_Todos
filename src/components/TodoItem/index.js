// Write your code here
import './index.css'

const TodoItems = props => {
  const {todoItemList, deleteTodo} = props
  const {id, title} = todoItemList
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todoItem">
      <p className="para">{title}</p>
      <button className="bt" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItems
