import React from 'react'

const TodoItem = () => {
  return (
    <li className='todo-item'>
        <FaCheckCircle
        style={{ color: 'green'}}
        className="todo-item-checkbox"
        />

        <span className="todo-item-content">해야할 일</span>

        <button className='todo-item-edit-btn'></button>

        <button className='todo-item-delete-btn'></button>
    </li>
  )
}

export default TodoItem