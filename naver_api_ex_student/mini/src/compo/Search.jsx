import React, { useContext, useState } from 'react'

import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { NaveData } from '../App';
import { useNavigate } from 'react-router-dom';

function Search  ()  {
    const nav = useNavigate();
    const data = useContext(NaveData)
    const [keyword,setKeyword] = useState('')
    const dataadd = (e) => {
        if(e.target.innerText === '책'){
            return('/v1/search/book.json')
        }
    }

    function getData(e){
        axios.get(dataadd(e),
    {
        params:{query: keyword},
        headers:{
            "X-Naver-Client-Id" : "dfYa4YgXm1Cx2XDC4Ngg",
            "X-Naver-Client-Secret ": "yT6YJdBvsB"  
        }
    })
    .then((res)=>{
        console.log(res)
        data.setSearchData(res.data.items)
        nav('/news')
    })
}

    
  return (
    <div className="App">
      <div>
      <h1>Nave</h1>
      <div className='Category'>
      <Button variant="primary" onClick={(e)=>{getData(e)}}>책</Button>
      <Button variant="secondary" onClick={(e)=>{getData(e)}}>Secondary</Button>
      <Button variant="success" onClick={(e)=>{getData(e)}}>Success</Button>
      </div>
      </div>

      <div className='search-wrap'>
      <input onChange={(e)=>{setKeyword(e.target.value)}}></input>
      <br></br>
      </div>
    </div>
  )
}

export default Search;