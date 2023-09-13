import { createSlice } from "@reduxjs/toolkit";

// createSlice() : state, reducer를 관리하는 함수
// - state 초기화
// - state를 변경하는 함수 정의 -> reducer 

// name : reducer 의 특정 이름을 정의하는 속성
// initialState : state를 초기화하는 속성
export const todoSlice = createSlice({
    name : 'todo', 
    initialState: {
        todos : []
    },
    reducers:{
        addTodo:(state, action) => {
            console.log(action);
            state.todos = state.todos.concat(action.payload)
            
    },
    checkChangeTodo:(state,action)=> {
        state.todos = state.todos.map((item) => ({
            ...item,
            complete: item.id === action.payload.id ? !item.complete : item.complete,
          }))

    },
    textChangTodo:(state,action)=>{
        state.todos = state.todos.map((item) => ({
            ...item,
            text: item.id === action.payload.id ? action.payload.text : item.text,
          }))

    },
    deleteTodo:(state,action)=>{
        state.todos = state.todos.filter((item) => item.id !== action.payload.id)
        
    }
    },
}) 

//컴포넌트에서 reducer함수를 실행할 수 있게 내보내기 
// export const {increment, decrement, incrementByAmount} = counterSlice.actions
export const TodoReducerActions = todoSlice.actions
export default todoSlice.reducer 



