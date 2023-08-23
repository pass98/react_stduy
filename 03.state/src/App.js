import './App.css'
import { useState } from 'react'

/*
  1.state  개념
    - 컴포넌트 내부에서 사용하는 데이터 (변경)
    - 일반 변수는 값이 변화해도 화면에 보여지지 않지만
      state는 변화를 감지한 후 화면에 변경된 값을 보여준다.(변경이 다 완료된 후 변경값을 표현함.)


  2.state 사용방법
   - 생성 -> const [state변수이름, set함수이름] = useState(초깃값)
   - state변수이름 : 컴포넌트 내부에서 사용할 데이터
   - set 함수이름  : state를 변경해주는 함수 
     ex) const [num, setnum] = useState(0)
          num = 3 (x)
          setNum(3) (0) -> state는 set함수를 통해서만 변경이 가능하다.
   const에 state를 집어 넣을 수 있는 이유 : state안에 있는 값은 변화하는 것보다는 값이 바꿀 때마다 새로운 값을 할당해주는 개념으로 정의가 된다.
  const가 아닌 let이나 var를 사용할 경우 외부에서 state값을 변경시킬 수 있다. 결국 state는 내부에서 값이 변하는게 핵심이므로 이는 적절하지 않다.
  
  
  - chltkdeksdp import {useState} from 'react' cnrk 


*/

function App() {
  let count = 0
  //state 사용법
  const [count2, setcount2] = useState(0) // count2 : 해당 스테이트에서 사용할 변하는 컴포넌트, useState('초기화하고싶은 값)
  // 초기값(useSTate)에서 함수(handleClick2)에 따라 변할 컴포넌트 (Count2)에 변하는 것을 요청함.
  const handleClick = () => {
    console.log('클릭이벤트 실행!')
    count += 1
    console.log(count)
  }

  const handleClick2 = () => {
    //state 변경하는 방법
    setcount2(count2 + 1) //화면에 렌더링이 다 끝난 후에 변경된 값이 화면에 출력
    setcount2(count2 + 1)
    setcount2(count2 + 1)
    console.log(count2)
  }

  return (
    <div>
      <p>변수:{count}</p>
      <p>state:{count2}</p>
      <button onClick={handleClick}>클릭</button>
      <button onClick={handleClick2}>클릭</button>
    </div>
  )
}

export default App
