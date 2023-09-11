import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({loginState,setLoginState}) => {
    const naviGate = useNavigate()
    const gotoLogin = () => {
        setLoginState(true)
        naviGate({loginState}=true && '/')
    }

    

  return (
    <div>
        <h1>로그인 페이지</h1>
        <button onClick={gotoLogin}>로그인</button>
        
    </div>
  )
}

export default Login