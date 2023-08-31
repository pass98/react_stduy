import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoInput = ({ todos, setTodos }) => {
  const inputRef = useRef(null)

  const HandleAddBtn = () => {
    let todo = inputRef.current.value // input요소, value

    setTodos([...todos, { id: uuidv4(), text: todo, complete: false }])
    console.log(todos)
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
