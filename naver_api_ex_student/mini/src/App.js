import logo from './logo.svg';
import './App.css';
import Search from './compo/Search';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsItem from '../../naver_api_ex_student/src/compo/NewsItem';

export const NaveData = createContext()

function App() {
  const [searchData,setSearchData] = useState([])
  return (
    <div className="App">
    <NaveData.Provider value={{searchData:searchData, setSearchData:setSearchData}}>
      <Routes>
        <Route path='/' element={<Search/>}></Route>
        <Route path='/news' element={<NewsItem/>}></Route>
      </Routes>
    </NaveData.Provider>
    </div>
  );
}

export default App;
