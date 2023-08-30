import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({title, todos, setTodos}) => {
  return (
    <div className='todo-list'>
      <p className='todo-list-tit'>[{title} : 0개]</p>
      <ul className='todo-list-ul'>
      {todos && todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
        //todos 값을확인하고 값이 있따면 todos.map함수 실행
      ))} 
      </ul>
    </div>
  )
}


export default TodoList