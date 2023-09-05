import React, { useState } from 'react'
import Page from './pages/Page'
import './App.css'
import { ThemeContext } from './context/ThemeContext'

const Ex02 = () => {
  const [isDark, setIsDark] = useState(false)
  const [user, setUser] = useState('홍길동')

  console.log('다크모드상태 :', isDark);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark, user}} >
        <Page/>
      </ThemeContext.Provider>
  )
}
export default Ex02