import React from 'react'
import { useState } from 'react';

/*
    실습문제2) 랜덤 숫자 맞추는 페이지 구현
    step1) 랜덤숫자를 생성한다. (범위 : 1~3)
    step2) 사용자가 누른 버튼의 숫자를 가져온다
    step3) 사용자가 선택한 숫자와 랜덤숫자를 비교한다
            - 두 숫자가 동일한 경우 : "정답입니다~!👍"
            - 두 숫자가 불일치 한경우 : "오답입니다..😒"
*/



const Ex02 = () => {
    const [num,setnum] = useState(0)
    const [ran,setran] = useState(0)
    const [res,setres] = useState('')
    
    const handleNum = (e) => {
        setran(Math.floor(Math.random() * (3)+1));
        console.log(ran)
        setnum(e.target.innerText)
        console.log(e.target.innerText);
        
        
        
    }

    if(num == ran){
        setres("정답입니다~!👍")
        }else{
        setres("오답입니다..😒")        }
        console.log(res)
    
  return (
    <div>
    <div> 
        <button onClick={handleNum}>1</button>
        <button onClick={handleNum}>2</button>
        <button onClick={handleNum}>3</button>
    </div>
    <div>
       <p> 내가 입력한 숫자 : {num}</p>
       <p>랜덤한 숫자 : {ran}</p>
        {num==ran?
        <p>정답입니다~!👍</p>:
        <p>오답입니다..😒</p>}
        {res}
    </div>
    </div>
  )
}

export default Ex02