import React, { useContext } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeContext } from '../context/ThemeContext'

const Page = () => {
  const {isDark,setIsdark} = useContext(ThemeContext)

  return (
 
    <div className='page'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
 
  )
}

export default Page