import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

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

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  onDeleteClick = values => {
    const {todoList} = this.state
    const alteredTodoList = todoList.filter(item => item.id !== values)
    this.setState({todoList: alteredTodoList})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="contentBG">
        <div className="todoContainer">
          <h1 className="heading">Simple Todos</h1>
          {todoList.map(listItem => (
            <TodoItem
              initialTodosList={listItem}
              onDeleteClick={this.onDeleteClick}
              key={listItem.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default SimpleTodos
