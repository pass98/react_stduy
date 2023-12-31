import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { increment,decrement, incrementByAmount } from '../redux/reducers/counterSlice'

import {CountReducerActions} from '../redux/reducers/counterSlice'
  /*
    1.useSelector() : store에 등록된 state를 접근하기 위한 함수
      사용법 : useSelector((state)=> state.등록된 reducer 속성명.state명)
      등록된 reducer 속성명 : configureStore의 reducer에 정의된 속성

    2.useDispatch(Action) : 명령을 내리기 위한 함수 , state변경에 대한 요청을 보내는 함수 
      사용법)
        const dispatch = useDispatch()
        dispatch(action) -> action에 대해 실행해줘!


    3.Action : state를 변경하기 위한 명령
      ex) counterSlice의 reducers속성에 정의된 increment, decrement 함수
*/

const Counter = () => {

  const count = useSelector((state)=>state.counter.count)
  // state의 이유 : store에 있는 reducer를 가져오기 위함. 
  // useSelector의 흐름 : counterSlice에 있는 초기state의 값에 접근을 하고 reudecer의 동작을 반영하여 새로운 값을 반영
  // 단, 이때 store에 reducer의 값을 받기 위해 
  const dispatch = useDispatch()

  console.log('counterReducer state :', count)

  return (
    <div>
    <div>Redux Toolkit 활용 실습</div>
    <p>{count}</p>
    <button onClick={()=>dispatch(CountReducerActions.increment())}>증가</button>
    <button onClick={()=>dispatch(CountReducerActions.decrement())}>감소</button>
    <button onClick={()=>dispatch(CountReducerActions.incrementByAmount({num:2}))}>2씩 증가</button>
    </div>
    )
}

export default Counter