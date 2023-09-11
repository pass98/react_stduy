import { useEffect, useState } from "react";
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from './page/Main'
import Login from './page/Login'
import GoodsList from './page/GoodsList'
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  
  // 로그인상태, 상품리스트를 관리하는 state를 정의하시오.
  // 로그인상태 : authenticate
  // 상품리스트 : goods

  const [authenticate,setAuthenticate] =useState(false)
  const [goods,setGoods] = useState([])

  useEffect(()=>{
    console.log('로그인상태:',authenticate);
    console.log('상품데이터:',goods);
  },[goods, authenticate])


  return (
    <div className="container">
      {/* Header컴포넌트가 출력되도록 구현하시오. */}
      <Header authenticate={authenticate} setAuthenticate={setAuthenticate}/>
    
      {/* 
          메인페이지, 로그인페이지, 메뉴리스트, 메뉴상세페이지로 이동되도록
          Route를 구성하시오.
        */}
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}></Route>
        <Route path='/menu/list' element={<GoodsList goods={goods} setGoods={setGoods}/>}/>
        <Route path='/menu/:id' element={<PrivateRoute authenticate={authenticate}/>} ></Route>
      </Routes>

      {/* Footer컴포넌트가 출력되도록 구현하시오. */}
      <Footer/>
    </div>
  );
}

export default App;
