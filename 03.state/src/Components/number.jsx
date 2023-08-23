import React from 'react'
import { useState } from 'react'



const number = () => {
    const [ran,setran] = useState(1)
    
    
  return (
    <div>랜덤한 숫자 : {ran}</div>
  )
}

export default number