import React from 'react'

const TodoList = () => {
  return (
    <div className='todo-list'>TodoList
        <p className='todo-list-tit'>[해야할 일: 개]</p>
        <ul className='todo-list-ul'>
            <TodoItem/>
        </ul>
    </div>
  )
}

export default TodoList