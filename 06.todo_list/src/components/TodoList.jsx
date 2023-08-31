import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ title, todos, setTodos, checked }) => {
  return (
    <div className="todo-list">
      <p className="todo-list-tit">
        [{title} : {todos.filter((item) => item.complete === checked).length}개]
      </p>
      <ul className="todo-list-ul">
        {todos &&
          todos.map((todo) => {
            if (todo.complete === checked) {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  setTodos={setTodos}
                  todos={todos}
                />
              )
              //todos 값을확인하고 값이 있따면 todos.map함수 실행
            }
          })}
      </ul>
    </div>
  )
}

export default TodoList
