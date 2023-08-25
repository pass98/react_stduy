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

    // const imgpath = '/img/dice'

    // //사용자 state
    // const [userScore,setUserScore] = useState(0)
    // const [userDicenum,setUserDiceNum] = useState(1)
    // const [userImg,setUserImg] = useState(`${imgpath}1.png`)

    // //컴퓨터 state
    // const [comScore,setComScore] = useState(0)
    // const [comDicenum,setComDiceNum] = useState(1)
    // const [comImg,setcomImg] = useState(`${imgpath}1.png`)


    // // 주사위 던지기 기능
    // const ThrowDice = () => {
    //     let userNum = parseInt(Math.random()*6) +1
    //     let comNum = parseInt(Math.random()*6) +1

    //     console.log(userNum, conNum);
    //     setUserDiceNum(userNum)
    //     setComDiceNum(comNum)
    //     setUserImg(`${imgpath}${userNum}.png`)
    //     setcomImg(`${imgpath}${comNum}.png`)
    //     jugement(userNum,comNum)
    // }

    // //주사위 눈 비교하는 기능
    // const jugement = (user,com) => {
    //     console.log('넘겨받은 숫자',user,com);
    //     if(user === com){
    //         alert('무승부!')
    //     }else if(user>com){
    //         setUserScore(userScore+1)
    //     }else{
    //         setComScore(comScore+1)
    //     }
    // }

  return (
    
    <div>
        
        <Board/>
    </div>

  )
}

export default Ex03