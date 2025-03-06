import {Component} from 'react'
import TodoItems from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todoItemList: initialTodosList,
  }

  deleteTodo = id => {
    const {todoItemList} = this.state
    const remainingTodos = todoItemList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoItemList: remainingTodos})
  }

  render() {
    const {todoItemList} = this.state

    return (
      <div className="tc">
        <div className="todo-cont">
          <h1 className="head">Simple Todos</h1>
          <ul className="list-cont">
            {todoItemList.map(eachItem => (
              <TodoItems todoItemList={eachItem} deleteTodo={this.deleteTodo} key={eachItem.id}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
