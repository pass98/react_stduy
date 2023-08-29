import './App.css';
import {useState,useRef} from 'react'


/*
  1.ref란
    - 컴포넌트 내부에 저장공간 & 특정 DOM 요소에 접근하기 위해 사용

  2.ref특징
    - 화면이 리렌더링되더라도 ref 내 값은 그대로 유지
    - ref 값이 변하더라도 컴포넌트가 리렌더링되지 않음.

  3.ref활용
    - 리렌더링이 일어나지 않아도 컴포넌트 내부에 데이터를 유지해야 할 경우만 사용
*/


function App() {
  let countVar = 0;
  const [countState, setCountState] = useState(0)
  let countRef = useRef(0)

  const handleClick1 = () => {
    countVar += 1
     console.log(countVar);
  }

  const handleClick2 = () => {
    setCountState(countState+1)
    console.log(countState)
  }

  const handleClick3 = () => {
    console.log('ref반환형태:',countRef)
    countRef.current += 1
     console.log(countRef.current); //current는 값을 객체로 저장하는 속성
                                    //변환값이 current로 저장되고 이후 countRef 안에서 호촐됨.
  }

  return (
    <div className="App">
      <p>var : {countVar} </p>
      <p>state : {countState}</p>
      <p>ref : {countRef.current}</p>
      <button onClick={handleClick1}>var +1</button>
      <button onClick={handleClick2}>state +1</button>
      <button onClick={handleClick3}>ref +1</button>
    </div>
  );
}

export default App;
