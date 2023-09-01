import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
    const {setIsdark} = useContext(ThemeContext)
  return (
    <div className='footer'>
        <button className='button' onClick={()=>setIsdark('gray')}>Dark Mode</button>
    </div>
    
  )
}

export default Footer