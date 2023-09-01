import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Content = () => {
    const {isdark} = useContext(ThemeContext)
  return (
    <div className='content' style={{backgroundColor:isdark}}><hr/>ooo님, 좋은 하루 되세요~!👍👍<hr/></div>
  )
}

export default Content