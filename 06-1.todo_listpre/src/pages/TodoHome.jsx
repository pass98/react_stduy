import React from 'react'
import TodoInput from '../../../06.todo_list/src/components/TodoInput'
import TodoList from '../../../06.todo_list/src/components/TodoList'

const TodoHome = () => {
  return (
    <div className ="todo-container">
        <h1 className='todo-tit'>ToDo List</h1>
        {/* todo 추가하는 영역*/ }
        <TodoInput/>

        {/* 해야할일 출력 */}
        <TodoList/>

        {/* 완료될 일 출력 */}
        <TodoList/>
    </div>
  )
}

export default TodoHome