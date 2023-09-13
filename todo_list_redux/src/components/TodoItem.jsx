import { compile } from 'nunjucks'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import {useDispatch,useSelector} from 'react-redux'
import todoSlice, { TodoReducerActions } from '../redux/reducers/todoSlice'

const TodoItem = ({ todo, setTodos }) => {
  //edited : 사용자가 수정버튼을 눌렀는지에 대한 상태
  // true : 수정| false : 수정X
  const [newText, setNewText] = useState(todo.text)
  const [edited, setedited] = useState('')

  const todos = useSelector(state=>state.todo.todos)
  const dispatch = useDispatch()

  const handleCheckChange = () => {
    // let updateList = todos.map((item) => ({
    //   ...item,
    //   complete: item.id === todo.id ? !item.complete : item.complete,
    // }))

    dispatch(TodoReducerActions.checkChangeTodo({id:todo.id}))
  }

  // 수정상태를 true로 변경
  const handleEditChange = () => {
    setedited(true)
  }

  //수정완료기능 구현
  // -사용자가 수정하려는 todo가 배열 내 todo가 맞는 지 체크하고 수정
  const handleSubmit = () => {
    // let updateList = todos.map((item) => ({
    //   ...item,
    //   text: item.id === todo.id ? newText : item.text,
    // }))

    // setTodos(updateList)

    dispatch(TodoReducerActions.textChangTodo({id:todo.id, text:newText}))
    setedited(false)
  }

  //   //사용자가 입력한 값을 newText에 저장
  // const handleEditText = (e) =>{
  //   setNewText(e.target.value)
  //   console.log(newText);
  // }

  const handleDelete = (id) => {
    if (window.confirm('정말 살인하시겠습니까?')) {
      // console.log('삭제할 todo의 id:', id)
      // let updateList = todos.filter((item) => item.id !== id)
      dispatch(TodoReducerActions.deleteTodo({id:id}))
      // setTodos(updateList)
    }
  }

  return (
    <li className="todo-item">
      {todo.complete ? (
        <FaCheckCircle
          className="todo-item-checked"
          style={{ color: 'green' }}
          onClick={handleCheckChange}

        />
      ) : (
        <FaCheckCircle
          className="todo-item-checkbox"
          style={{ color: 'lightgray' }}
          onClick={handleCheckChange}
        />
      )}

      {edited ? (
        <input
          type="text"
          className="todo-item-edit-input"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={`todo-item-content ${
            todo.complte ? 'todo-item-content-checkd' : ''
          }`}
        >
          {todo.text}
        </span>
      )}

      {todo.complete ? null : edited ? (
        <button className="todo-item-submit-btn" onClick={handleSubmit}>
          😍
        </button>
      ) : (
        <button className="todo-item-edit-btn" onClick={handleEditChange}>
          👉
        </button>
      )}
      <button
        className="todo-item-delete-btn"
        onClick={() => handleDelete(todo.id)}
      >
        🗑️
      </button>
    </li>
  )
}

export default TodoItem
