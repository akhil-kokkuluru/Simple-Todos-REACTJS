import './index.css'

const TodoItem = props => {
  const {initialTodosList, onDeleteClick} = props
  const {title, id} = initialTodosList
  const onDeletion = () => {
    onDeleteClick(id)
  }
  return (
    <li className="contBGR">
      <p className="para">{title}</p>
      <button className="buttons" type="button" onClick={onDeletion}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
