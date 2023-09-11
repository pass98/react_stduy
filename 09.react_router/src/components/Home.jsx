import React from 'react'
import {Link, useNavigate} from 'react-router-dom' 


/*
  실습)
  1. 로그인 상태를 판단하여 "로그인" or "로그아웃"으로 출력해보기
    - login 
  2. "로그아웃" 버튼을 클릭했을 때, '로그인' 상태로 변환하기
*/

const Home = ({loginState,setLoginState}) => {

  const navigate = useNavigate()

  const handleLogin = () =>{
    if(loginState){
      setLoginState(false)
    }else{
      navigate('/login')
  }
}

  const goToProduct = () =>{
      navigate('/product')
  }

  const gotoLogout = () => {
    navigate({loginState}=true && '/login')
    setLoginState(false)
    console.log('로그아웃 되었습니다.')
}

  const gotoUser = () => {
    if(loginState){
      navigate('/user')
    }else{
      navigate('/login')
    }
  }




  return (
    <div>
        <h1>Home</h1>
        <Link to={"/about"}>About 페이지로 이동하기! </Link>
        <button onClick={goToProduct}>상품페이지로 이동하기!</button>
        {/* <Link to ={'/login'}>로그인</Link> */}
        <hr/>
        <button onClick={handleLogin}>{loginState?"로그아웃정답" : '로그인정답'}</button>
        <button onClick={gotoLogout} >로그아웃</button>
        <button onClick={gotoUser}>마이페이지</button>
    </div>
  )
}

export default Home