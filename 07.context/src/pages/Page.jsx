import React, { useState } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeContext } from '../context/ThemeContext'

const Page = () => {
  const [isdark,setIsdark] = useState(null)

  return (
    <ThemeContext.Provider value = {{isdark,setIsdark}}>
    <div className='page'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
    </ThemeContext.Provider>
  )
}

export default Page