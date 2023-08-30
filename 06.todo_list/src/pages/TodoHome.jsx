import React, { useState } from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {

    const [todos,setTodos] = useState([]);

    console.log(todos)
  return (
    <div className='todo-container'>
        <h1 className='todo-tit'>ToDo List</h1>

        {/* todo 추가하는 영역*/ }
        <TodoInput todos={todos} setTodos={setTodos}/>
        
         {/* 해야할 일 출력*/ }
        <TodoList title='해야할 일' todos={todos} setTodos={setTodos} />

         {/*완료된 일 */ }
        <TodoList/>

    </div>
  )
}

export default TodoHome