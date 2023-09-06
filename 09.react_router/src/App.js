import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Porduct from "./components/Porduct";
import ProductDetail from "./components/ProductDetail";
import ProductDetail2 from "./components/ProductDetail2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element = {<Porduct/>} />

      {/* URL 파라미터 형식으로 Route 구성하기*/ }
      /*값을 일일이 쳐야 하기 때문에 정보가 많을 수록 검색하기가 더어려움.*/ 
      <Route path = '/product/:pro_no/' element={<ProductDetail/>} />

      <Route path = '/productDetail2' element={<ProductDetail2/>}/>
    </Routes>
  );
}

export default App;
