import React, { useRef } from 'react'

const TodoInput = ({ todos  , setTodos }) => {

  const inputRef = useRef(todos)

  const handleAddBtn = () =>{
    let todo = inputRef.current.value // input값 가져오기 

    setTodos([
        ...todos,
        {id: todos.length, text: todo, complete: 'checked' },
        ])  // state를 이용해 기존의 todo 정보를 업데이트, ...을 사용하면 기존에 있었던 정보들을 가져올 수 있다.
    console.log(todos)
    inputRef.current.value = ''
    inputRef.current.focus()  // 버튼을 누르면 입력창에 있던 값들을 초기화 시켜주고 다시 입력 커서만 집중되도록함.
  }

  return (
    <div className='todo-inputbox'>
      <input 
      type ='text'
      className='todo-inputbox-input'
      placeholder='할 일을 입력해주세요~!'
      ref={inputRef}></input>

    <input 
        type= 'button' 
        className='todo-inputbox-add-btn' 
        value='등록' 
        onClick={handleAddBtn}
    />
    </div>
  )
}

export default TodoInput