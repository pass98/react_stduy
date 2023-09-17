import React, { useState } from 'react'
import TodoList from '../components/TodoList'

import TodoInput from '../components/TodoInput'

const TodoHome = () => {

  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')



  return (
    <div className='todo-container'>
      <h1 className='todo-tit'>ToDo List</h1>
      {/* todo 추가하는 영역 */}
      <TodoInput todos = {todos} setTodos = {setTodos}/>

      {/* 해야할 일 출력 */}
      <TodoList title={title} todos = {todos} setTodos = {setTodos}/>

      {/*완료된 일 출력*/}
      <TodoList/>
      </div>
  )
}

export default TodoHome