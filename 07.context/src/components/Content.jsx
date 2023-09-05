import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Content = () => {
    const {isDark, user} = useContext(ThemeContext)
    const styldDiv = {
      backgroundColor: isDark?'#262626':'white',
      color: isDark? 'white' : 'black',
    }

  return (
    <div className='content' style={styldDiv}><hr/>{user}님, 좋은 하루 되세요~!👍👍<hr/></div>
  )
}

// 선언할 때 소괄호를 한번 더 사용하는 이유 : javascript를 제대로 적용시키기 위해서
// ex) {stlye='black} 원래 작성은 고정,  그러나 javscript는 함수 = {}로 표현

export default Content