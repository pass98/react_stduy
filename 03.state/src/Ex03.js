import React, { useState } from 'react'
import Board from './Components/Board'

/* 
    실습문제 3 주사위 게임 페이지 구현
    STEP1) 사용자가 '던지기' 버튼을 누른다.
    STEP2) 주사위 눈인 랜덤으로 표시된다.
        - 랜덤 숫자를 이용해서 이미지 띄우기
    STEP3) 사용자의 주사위 눈과 컴퓨터의 주사위 눈을 비교한다.
        - 무승부 : alert()를 활용하여 "무승부!" 창 띄우기
        - 사용자가 이겼을 경우 : 사용자 +1
        - 컴퓨터가 이겼을 경우 : 컴퓨터 +1
    SETP4)  " Reset"버튼을 클릭 시 모든 내용 초기화
        -점수, 이미지 전부 초기화 

    만들어야 할 state 
    -  점수
    -  주사위 숫자
    -  주사위 이미지 경로
    -
    
    [만들어야 할 Componnent]
    - Board.jsx

*/


const Ex03 = () => {

  return (
    
    <div>
        <Board/>
    </div>

  )
}

export default Ex03