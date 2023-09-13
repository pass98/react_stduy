import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'



//명령을 내리기 위한 Action 불러오기
import {TodoReducerActions} from '../redux/reducers/todoSlice'

const TodoInput = () => {
  const inputRef = useRef(null)

  const dispatch = useDispatch()

  const HandleAddBtn = () => {
    let todo = inputRef.current.value // input요소, value

    //setTodos([...todos, { id: uuidv4(), text: todo, complete: false }])
    dispatch(
      TodoReducerActions.addTodo({ 
      id: uuidv4(),
      text: todo, 
      complete: false 
    })
  )

    // 입력된 내용을 비우고 커서 생성하기
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div className="todo-inputbox">
      <input
        type="text"
        className="todo-inputbox-input"
        placeholder="할 일을 입력해주세요~!"
        ref={inputRef}
      />
      <input
        type="button"
        className="todo-inputbox-add-btn"
        value="등록"
        onClick={HandleAddBtn}
      />
    </div>
  )
}

export default TodoInput
