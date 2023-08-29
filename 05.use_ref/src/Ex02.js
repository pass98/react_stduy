import React from 'react'
import {useRef} from 'react'

const Ex02 = () => {
    let inputID = useRef();
    let inputPw = useRef();

    const handleClick = () => {
        if(inputID.current.value ==='smart' && inputPw.current.value==='1234'){
            alert(`환영합니다~! ${inputID.current.value}님!`) 
        }else{
            alert('로그인 실패하였습니다.')
        }
        console.log(inputID.current.value,inputPw.current.value);
        // console.log(inputRef.current);
        // console.log(inputRef.current.value);
    }
  return (
    <div>
        <from>
            ID : <input type = 'text' ref={inputID}/>
            PW : <input type = 'text' ref={inputPw}/>
           <input type = 'button' onClick={handleClick} value='클릭'></input>
        </from>
    </div>
  )
}

export default Ex02