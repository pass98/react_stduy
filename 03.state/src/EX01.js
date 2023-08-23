import React from 'react'
import imgSrc from './img/한강3.png'
import Like from './Components/Like'


/*
    실습문제1) 좋아요 기능을 가진 페이지 만들기 구현
    STEP1) 빈 하트를 클릭 시, 꽉찬 하트로 변경해주기 ! ❤️
    STEP2) 빈 한트를 클릭 시, 좋아요 1개로 변경해주기!
    STEP3) '좋아요'가 눌린 상태에서 클릭 시, 되돌리기!

*/

const EX01 = () => {
  return (
    <div>
        <img src={imgSrc} style={{width:'500px'}}/>
        <Like></Like>
    </div>
  )
}

export default EX01