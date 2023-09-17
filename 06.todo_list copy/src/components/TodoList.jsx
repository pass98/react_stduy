import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({title,todos,setTodos, checked}) => {
  return (
    <div className='todo-list'>
      <p className='todo-list-tit'>[{title} : 0개]</p>
      <ul className='todo-list-ul'>
        {todos && 
          todos.map((todo)=>{
           if(todos.completed === 'checked'){
              return ( <TodoItem 
                          key = {todo.id} 
                          todo={todo} 
                          todos ={todos} 
                          setTodos={setTodos}
                />)
           } else {
              return null
           }
          })}
      </ul>

    </div>
  )
}

export default TodoList