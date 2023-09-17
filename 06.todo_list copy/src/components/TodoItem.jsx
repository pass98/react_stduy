import React from 'react'
import {FaCheckCircle, FaRegCircle } from 'react-icons/fa'


const TodoItem = ({todo, todos, setTodos}) => {

  const handleCheckChange = () => {
   let updateList = todos.map((item)=>({
      ...item, 
      complete : item.id === todo.id ? !item.complete : item.complete
    }))  
    // item은 변경된 todos의 배열 자체를 의미하고 있음.
    // 따라서 아래의 뜻은 todo.id(매개변수 todo.id) === todo.id(원래 todo.id)

    setTodos(updateList)
  }

  return (
    <li className="todo-item">
      {todo.complete?
      <FaCheckCircle 
      style={{ color : 'green'}}
      onClick={handleCheckChange}
      className = 'todo-item-checkbox'
      />: 
      <FaRegCircle 
      style={{ color : 'black'}}
      onClick={handleCheckChange}
      className = 'todo-item-checkbox'
      />
      }
      <span className={ `'todo-item-content' ${todo.complete? 'todo-item-content-checked':''}`  }>{todo.text}</span>

      <button className='todo-item-edit-btn'>수</button>

      <button className='todo-item-delete-btn'>삭제</button>
    </li>
  )
}

export default TodoItem
