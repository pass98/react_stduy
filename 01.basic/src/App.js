import logo from './logo.svg'
import './App.css'

/*
  shift + alt + f : 코드정렬 단축키

  JSX 문법
   - HTML과 JS를 하나의 파일에 작성할 수 있는 문법

  JSX문법의 특징
  1. 반드시 하나의 부모요소가 있어야한다! 반드시 하나의 부모요소의 여러개의 내용을 집어넣는 것만이 허용 가능하다.
    + 꼭 <div>가 아니어도 된다!

  2. 표현식을 사용할 수 있다.

  & if문이나 변수등의 값을 사용할 수 없음.
   2-1. 조건식이 하나일 때  --&&연산자 활용
   2-2. 조건식이 두개일 때 - 삼항연산자 활용
   2-3. 조건식이 세 개일때 - return문 위에 조건식을 만든 후 결과값만 {}에 넣어준다.
  
   
  3. 기존 html문법과 다른 점
    3-1. class 속성 -> className 속성
    3-2. HTML 문법을 사용할 때 반드시 소문자로 작성
    3-3. HTML문법 내 내용이 없어도 끝내그는 반드시 작성해야함.
    3-4. onclick 속성 -> onClick 속성 (Click이 대문자) 

  4.스타일 적용
    4-1. css파일 내 스타일 정의
    4-2. 객체형태로 정의
*/

function App() {
  let a = 'a'
  let msg = 'Hello React!'
  let isLogin = true
  let name = '임승환'

  let text = ''

  if(name === '선영표'){
    text = 'Front-end'
  }else if(name === '임승환'){
    text = 'Back-end'
  }else{
    text = 'DB'
  }

  // 두 단어로 이루어진 스타일을 정의할 떄
  // 마지막 단어의 첫 번째 문자를 '대문자'로 작성
  const styled_1 = {
    color : "green" , 
    backgroundColor : 'black',
  }

  return (
    <div className ="container">
      <div className="item" style ={styled_1}>Hello React!</div>
      <div style={{color:'blue', fontsize:'30px'}}>Hello React!</div>
      <div>{msg}</div>

      {/* 조건부 렌더링 */}
      {/* 판별식이 하나일 때 */}
      {isLogin && "환영합니다~!"}


      {/* 조건식이 두개일 때 */}
      {/* 조건식이 두개일때는 - 삼항연산자를 사용해서 구분한다.*/ }
      {name==='임명진'?
      <p>환영합니다~!</p>:
      <p>이용할 수 없습니다..</p>}

      {/* 조건식이 세개일 때 리턴문 위에 조건값을 만들고 결과만 출력하는 형태 */}
      {text}

      <p><button onClick={()=>alert("마우스를클릭실행!")}>클릭</button></p>
    </div>
  )
}

export default App
