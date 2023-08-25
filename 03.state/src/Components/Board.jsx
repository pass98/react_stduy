import React from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import '../style/ex03.css'

const Board = (props) => {
     //유저 주사위
     const [diceNum,setdiceNum] = useState(1);
     //컴퓨터 주사위
     const [cpuNum,setcpuNum] = useState(1);
     //유저 점수
     const [userNumber,setuserNumber] = useState(0);
     //컴퓨터 점수
     const [cpuNumber,setcpuNumber] = useState(0);
 
     const RanDice = () => {
        let randomnumber = parseInt(Math.random()*6)+1          // state를 그대로 작성하면 react 순서상 제일 마지막에 렌더링 됨.
        let randomnumber2 = parseInt(Math.random()*6)+1         // 변수에 저장하면 맨마지막에 진행되는 렌더링을 변수에저장하는 순서로 고정이 가능하기 때문에 비교할때
         setdiceNum(randomnumber)                               // state를 변수에 지정함.
         setcpuNum(randomnumber2)                               // 비교하려는 주사위가 두개이기때문에 state또한 두개
        plusall(randomnumber,randomnumber2)                     // 마지막에 비교하려는 함수의 매개변수가 두 개이므로 두개
    }
    const plusall = (randomnumber,randomnumber2) => {           
        if(randomnumber == randomnumber2){
            alert('무승부입니다.')
        }else if(randomnumber > randomnumber2){
            setuserNumber( userNumber +1)
        }else if(randomnumber < randomnumber2){
            setcpuNumber(cpuNumber + 1) 
        }
        console.log(userNumber,cpuNumber)
        firstWin(userNumber, cpuNumber)
    }
    
    const firstWin = (userNumber, cpuNumber) => {
        if(userNumber == 5){
            alert('당신이 이겼습니다!')
        }else if(cpuNumber == 5){
            alert('컴퓨터가 이겼습니다!')
        }
    }
     const resetall = ()  => {
        setdiceNum(1)
        setcpuNum(1)
        setuserNumber(0)
        setcpuNumber(0)
     }

  return (
    <div className='container'>
        <h1>주사위게임</h1>
        <div className='button-area'>
        <Button variant='secondary' onClick={ThrowDice}>던지기</Button>
        <Button onClick={props.resetall} variant='danger' >RESET</Button>
        </div>
        <div className='board-area'>
        <div><p>나</p><img src={`../img/dice${diceNum}.png`}></img>
        <p>현재 점수는?{userNumber}</p>
        </div>
        <div><p>컴퓨터</p><img src={`../img/dice${cpuNum}.png`}></img>
        <p>현재 점수는?{cpuNumber}</p>
        </div>
        <Board name={`나(${userDiceNum})`} imgPath = {userImg} score={userScore}/>
        <Board name={`컴퓨터(${comDiceNum})`} imgPath = {userImg} score={comScore}/>
        </div>
    </div>
  )
}

export default Board