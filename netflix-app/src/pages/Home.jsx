import React, { useEffect } from 'react'
import api from '../api'
const Home = () => {
  
  const popularReq = async () => {
    let res = await api.get('/movie/popular?language=ko-KR&page=1')
    console.log(res.data);
  }
  const topRatedReq = async () => {
    let res = await api.get('/movie/top_rated?language=ko-KR&page=1')
    console.log(res.data);
  }
  const upComingReq = async () => {
    let res = await api.get('/movie/upcoming?language=ko-KR&page=1')
    console.log(res.data);
  }

  //3가지 종류의 영화목록을 묶어서 요청하는 방법 
  const getMovieList = async () => {
    const popularList = api.get('/movie/popular?language=ko-KR&page=1')
    const topRatedList = api.get('/movie/top_rated?language=ko-KR&page=1')
    const upcomingList = api.get('/movie/upcoming?language=ko-KR&page=1')

   const [popular, topRated, upcoming] = await Promise.all([popularList,topRatedList,upcomingList])
   console.log(popular);
   console.log(topRated);
   console.log(upcoming);
  }

  // 화면이 바뀔 때 자동으로 값이 나와야 하므로 
  useEffect(()=>{
    // popularReq()
    // topRatedReq()
    // upComingReq()
    getMovieList()
    
  },[])
  return (
    <div>
      Home
    </div>
  )
}

export default Home