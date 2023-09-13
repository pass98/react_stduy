import { createSlice } from "@reduxjs/toolkit";

// createSlice() : state, reducer를 관리하는 함수
// - state 초기화
// - state를 변경하는 함수 정의 -> reducer 

// name : reducer의 특정이름을 정의하는 속성
// initialState : state를 초기화하는 속성
// reducers : 컴포넌트에서 state변경요청 시 수행하는 Action기능을 정의하는 속성
export const counterSlice = createSlice({
    name : 'counter', 
    initialState: {
        count:10
    },
    reducers:{
        // reducer함수 정의 시, state를 항상 생성해주어야함. 
        // 정의한 state는 내부에 있는 initialState에 접근할 수 있음.
        increment: (state) => {
            state.count+=1
        },
        //count를 -1 감소시키는 decrement 함수 정의하기 
        decrement : (state) => {
            state.count-=1
        },
        //넘겨받은 숫자를 이용해서 state를 변경하는 함수 정의하기
        //action -> {type, payload} 형태로 반환
        // type : 명령 타입 ex) 숫자를 증가해라 (increment), 숫자를 감소해라(decrement)
        // payload : 외부로부터 넘겨받은 데이터를 저장하는 속성
        incrementByAmount : (state,action)=>{
            console.log('counterSlice action',action)
            // action -> {type:'',payload:{num:2}} 
            state.count += action.payload.num
        }
    },
}) 

//컴포넌트에서 reducer함수를 실행할 수 있게 내보내기 
// export const {increment, decrement, incrementByAmount} = counterSlice.actions
export const CountReducerActions = counterSlice.actions


//store에서 접근할 수 있도록  내보내기 
export default counterSlice.reducer 



