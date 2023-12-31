import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorList = () => {

    const {setColor} = useContext(ColorContext)

    // 각 div를 클릭했을 때 해당 div의 색상값이 color state에 저장되도록 구현해보기!
  return (
    <div>
        <h1>색상 선택하기</h1>
        <div className='colorList'> 
            <div className='box color-red' onClick={()=>setColor(`'color-red'`)}></div>
            <div className='box color-orange' onClick={()=>setColor(`'color-orange'`)}></div>
            <div className='box color-yellow' onClick={()=>setColor(`'color-yellow'`)}></div>
            <div className='box color-green' onClick={()=>setColor(`'color-green'`)}></div>
            <div className='box color-blue' onClick={()=>setColor(`'color-blue'`)}></div>
        </div>
    </div>
  )
}

export default ColorList