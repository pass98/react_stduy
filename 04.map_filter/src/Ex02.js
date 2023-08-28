import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBoard from './components/MenuBoard';
import './style/Ex02.css'

// import 'bootstrap/dist/css/boostrap.min.css'
/*
    실습문제) 커피메뉴를 출력하는 웹 페이지 구현
    STEP1) 'coffee_menus.json' 파일을 import한다.
    STEP2) 커피정보를 HTML문법과 결합하여 화면에 출력한다.

    결과물 : Card형태로 메뉴이름과 금액만 출력할 것
    * react boostrap 사용할 경우
    1. npm install react_bootstrap bootstrap 설치
    2. Ex02.js 에 css파일 import하기
        -> import 'bootstrap/dist/css/bootstrap.min.css';
    3. 원하는 컴포넌트가 있다면 import해서 사용하기
        eX) 버튼을 사용할 경우 -> import {button} from 'react-bootstrap'
*/



// const Ex02 = () => {

//     const [coffees,setCoffees] = useState(coffe_menus)
//   return (
//     <div>
//         {/* {coffees.map((coffee)=>(
//             <p key={coffee.id}>
//                 <span>종류: {coffee.category}</span>
//                 <span>이름: {coffee.name}</span>
//                 <span>가격: {coffee.price}</span>
//             </p>
//         ))}
//         <BasicExample/> */}
        
//     </div>
//   )
// }          기존에 내가 작성했던 답

// export default Ex02

const Ex02 = () => {
  return(
    <MenuBoard/>
  )
}
export default Ex02