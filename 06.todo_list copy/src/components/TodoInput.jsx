import React, { useRef } from 'react'

const TodoInput = ({ todos  , setTodos }) => {

  const inputRef = useRef(todos)

  const handleAddBtn = () =>{
    let todo = inputRef.current.value // input값 가져오기 

    setTodos([
        ...todos,
        {id: todos.length, text: todo, complete: false },
          
    ])
    console.log(todos)
    inputRef.current.value = ''
    inputRef.current.focus()
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