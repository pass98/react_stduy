import React from 'react'
import { useState } from 'react'

const Like = () => {
    const [heart, setHeart] = useState('🤍')
    const [count, setCount] = useState(0)

    // 눌렀을 때 count가 0이면 빨간색 하트와 수치가 1이 됨
    // count가 1이면 초기화됨.
    const handleLike = () => {
        if(count === 0){
        setCount(1)
        setHeart('❤️')
        }else{
        setCount(0)
        setHeart('🤍')
        }
    }

    // 초기화버튼을 누르면 초기값으로 돌아감
    const reset = () => {
        setCount(0)
        setHeart('🤍')
    }


  return (
    <div>
        <span onClick={handleLike}>{heart} </span> 좋아요 {count}개
        <button onClick={reset} value = '초기화'>초기화</button>
    </div>
  )
}

export default Like
