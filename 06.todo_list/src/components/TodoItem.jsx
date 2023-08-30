import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'

const TodoItem = ({todos, todo, setTodos}) => {

  const handleCheckChange = () => {
    let updateList =  todos.map((item)=>({
      ...item,
      complete: item.id === todo.id ? !item.complete : item.complete 
    }))

    setTodos(updateList)
    }

  return (
    <li className='todo-item'>
        <FaCheckCircle 
        className = 'todo-item-checkbox' 
        style = {{color: 'green'}}
        onClick = {handleCheckChange}
        />
    <span className='todo-item-content'>{todo.text}</span>

    <button className='todo-item-edit-btn' >👉</button>
    <butoon className='todo-item-delete-btn'>🗑️</butoon>

    </li>
  )
}

export default TodoItem