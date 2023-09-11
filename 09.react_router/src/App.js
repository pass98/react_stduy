import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Porduct from "./components/Porduct";
import ProductDetail from "./components/ProductDetail";
import ProductDetail2 from "./components/ProductDetail2";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import User from "./components/User";
import Posts from './components/Posts';



function App() {

  const [loginState, setLoginState] = useState(false)

  useEffect(()=>{
    console.log('로그인상태:',loginState);
  },[loginState])

  //로그인 상태에서 접근할 수있는 페이지는 PrivateRoute를 만들어서 관리
  //<<Navigate to="이동할 경로"/>
  const PrivateRoute = () => {
    return loginState? <User/> : <Navigate to="/login"/>
  }


  return (
    <Routes>
      <Route path="/" element={<Home loginState={loginState} setLoginState={setLoginState}/>} />
      <Route path="/about" element={<About />} />
      <Route path='/login' element={<Login setLoginState={setLoginState}/>} />

      <Route path="/product" element = {<Porduct/>} />

      {/* URL 파라미터 형식으로 Route 구성하기*/ }
      /*값을 일일이 쳐야 하기 때문에 정보가 많을 수록 검색하기가 더어려움.*/ 
      <Route path = '/product/:pro_no/' element={<ProductDetail/>} />

      <Route path = '/productDetail2' element={<ProductDetail2/>}/>

      <Route path = '/user' element={<PrivateRoute/>}/>

      {/* axios를 이용하여 json-server 데이터요청하는 실습*/}
      <Route path ='/post' element={<Posts/>} />
    </Routes>
  );
}

export default App;
