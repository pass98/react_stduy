import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({title,todos,setTodos}) => {
  return (
    <div className='todo-list'>
      <p className='todo-list-tit'>[해야할 일: 개]</p>
      <ul className='todo-list-ul'>
        {todos && todos.map(()=>{
          
        })}
        <TodoItem/>
      </ul>

    </div>
  )
}

export default TodoList