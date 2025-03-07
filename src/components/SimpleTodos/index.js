import {Component} from 'react'
import TodoItems from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening', completed: false},
  {id: 2, title: 'Rent the movie for tomorrow movie night', completed: false},
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {id: 4, title: 'Drop the parcel at Bloomingdale', completed: false},
  {id: 5, title: 'Order fruits on Big Basket', completed: false},
  {id: 6, title: 'Fix the production issue', completed: false},
  {id: 7, title: 'Confirm my slot for Saturday Night', completed: false},
  {id: 8, title: 'Get essentials for Sunday car wash', completed: false},
]

class SimpleTodos extends Component {
  state = {
    todoItemList: initialTodosList,
    newTodo: '',
    quantity: 1,
    editingId: null,
    editedTitle: '',
  }

  deleteTodo = id => {
    this.setState(prevState => ({
      todoItemList: prevState.todoItemList.filter(
        eachTodo => eachTodo.id !== id,
      ),
    }))
  }

  addTodo = () => {
    const {newTodo, todoItemList} = this.state
    if (newTodo.trim() === '') return

    // Extract trailing number
    const match = newTodo.match(/(.*?)(\d+)$/)
    let text = newTodo
    let qty = 1

    if (match) {
      text = match[1].trim()
      qty = parseInt(match[2], 10)
    }

    const newTodos = Array.from({length: qty}, (_, i) => ({
      id: Date.now() + i,
      title: text,
      completed: false,
    }))

    this.setState(prevState => ({
      todoItemList: [...prevState.todoItemList, ...newTodos],
      newTodo: '',
    }))
  }

  toggleComplete = id => {
    this.setState(prevState => ({
      todoItemList: prevState.todoItemList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    }))
  }

  handleInputChange = e => {
    this.setState({newTodo: e.target.value})
  }

  handleQuantityChange = e => {
    const qty = parseInt(e.target.value, 10)
    this.setState({quantity: Number.isNaN(qty) ? 1 : qty})
  }

  startEditing = (id, title) => {
    this.setState({editingId: id, editedTitle: title})
  }

  handleEditChange = e => {
    this.setState({editedTitle: e.target.value})
  }

  saveEdit = id => {
    const {editedTitle} = this.state
    if (editedTitle.trim() === '') return

    this.setState(prevState => ({
      todoItemList: prevState.todoItemList.map(todo =>
        todo.id === id ? {...todo, title: editedTitle} : todo,
      ),
      editingId: null,
      editedTitle: '',
    }))
  }

  render() {
    const {todoItemList, newTodo, quantity, editingId, editedTitle} = this.state
    return (
      <div className="tc">
        <div className="todo-cont">
          <h1 className="head">Simple Todos</h1>
          <div className="input-cont">
            <input
              type="text"
              placeholder="Enter todo"
              className="input-box"
              value={newTodo}
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              placeholder="Qty"
              className="qty-box"
              value={quantity}
              onChange={this.handleQuantityChange}
              min="1"
            />
            <button type="button" className="add-btn" onClick={this.addTodo}>
              Add
            </button>
          </div>
          <ul className="list-cont">
            {todoItemList.map(eachItem => (
              <TodoItems
                key={eachItem.id}
                todoItem={eachItem}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
                startEditing={this.startEditing}
                saveEdit={this.saveEdit}
                handleEditChange={this.handleEditChange}
                editingId={editingId}
                editedTitle={editedTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
