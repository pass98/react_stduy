              
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/ex03.css'
import {Button} from 'react-bootstrap'
import Board from './Components/BOardcopy';

/*
    실습문제) 주사위 게임 페이지 구현
    STEP1) 사용자가 "던지기" 버튼을 누른다.
    STEP2) 주사위 눈이 랜덤으로 표시된다.
     - 랜덤숫자를 이용해서 이미지 띄우기 
    STEP3) 사용자의 주사위 눈과 컴퓨터의 주사위 눈을 비교한다.
     - 무승부 : alert()를 활용하여 "무승부!" 창 띄우기
     - 사용자가 이겼을 경우 : 사용자점수 +1
     - 컴퓨터가 이겼을 경우 : 컴퓨터점수 +1
    STEP4) "Rest"버튼 클릭 시 모든 내용 초기화
     - 점수, 이미지

    [만들어야 할 state]
     - 점수(사용자, 컴퓨터)
     - 주사위 숫자(사용자, 컴퓨터)
     - 주사위 이미지 경로(사용자, 컴퓨터)

    [만들어야 할 Component]
     - Board.jsx

*/
const Ex03 = () => {
  const imgPath = '/img/dice'

  //사용자 state
  const [userScore, setUserScore] = useState(0)
  const [userDiceNum, setUserDiceNum] = useState(1)
  const [userImg, setUserImg] = useState(`${imgPath}1.png`)

  //컴퓨터 state
  const [comScore, setComScore] = useState(0)
  const [comDiceNum, setComDiceNum] = useState(1)
  const [comImg, setComImg] = useState(`${imgPath}1.png`)

  //주사위 던지기 기능
  const throwDice = () => {
    let userNum = parseInt(Math.random()*6)+1
    let comNum = parseInt(Math.random()*6)+1

    console.log(userNum,comNum);
    
    setUserDiceNum(userNum)
    setComDiceNum(comNum)
    setUserImg(`${imgPath}${userNum}.png`)
    setComImg(`${imgPath}${comNum}.png`)

    jugement(userNum, comNum)
  }

  //주사위 눈 비교하는 기능
  const jugement = (user, com)=>{
    console.log('넘겨받은 숫자:',user, com);
    if(user === com){
      alert('무승부!')
    }else if(user > com){
      setUserScore(userScore+1)
    }else{
      setComScore(comScore+1)
    }
  }

  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <div className='button-area'>
          <Button variant="secondary" onClick={throwDice}>던지기!</Button>
          <Button variant="danger" onClick={reset}>초기화</Button>
        </div>
        <div className='board-area'>
          <Board name={`나(${userDiceNum})`} imgPath={userImg} score={userScore}/>
          <Board name={`컴퓨터(${comDiceNum})`} imgPath={comImg} score={comScore}/>
        </div>
    </div>
  )
}

export default Ex03