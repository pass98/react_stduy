import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const Header = () => {
    const {isdark} = useContext(ThemeContext)
  return (
    <div className='header' style={{backgroundColor:isdark}}>
    <h1>Welcome ooo!</h1>
    </div>
  )
}

export default Header