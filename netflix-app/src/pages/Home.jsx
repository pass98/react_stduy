import React, { useEffect,useState, CSSProperties } from 'react'
import api from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { MovieReducerActions } from '../redux/reducers/movieSlice'
import Banner  from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  
  
  const popularMovies = useSelector((state)=> state.movie.popularMovies)
  const [loading,setLoading] = useState(false)
  
  const dispatch = useDispatch()
  //3가지 종류의 영화목록을 묶어서 요청하는 방법 
  const getMovieList = async () => {
    setLoading(true) // 로딩창을 사용하기 위해서 위에서부터 작동되는 js의 원리를 이용해 
                    // state set을 맞춤. true는 '데이터를 받기전 로딩창 출력을 의미함' *순서 주의.
    const popularList = api.get('/movie/popular?language=ko-KR&page=1')
    const topRatedList = api.get('/movie/top_rated?language=ko-KR&page=1')
    const upcomingList = api.get('/movie/upcoming?language=ko-KR&page=1')

   const [popular, topRated, upcoming] = await Promise.all([popularList,topRatedList,upcomingList])
   console.log(popular.data);
   console.log(topRated.data);
   console.log(upcoming.data);

   setLoading(false) // 위의 있는 데이터의 출력을 전부 받으면 loading의 값을 false로 바꿔서 값을 출력되도록 함. 

   dispatch(MovieReducerActions.initData({
    popular:popular.data,
    topRated:topRated.data,
    upcoming : upcoming.data}
    )
  )

}

  // 화면이 바뀔 때 자동으로 값이 나와야 하므로 
  useEffect(()=>{
    // popularReq()
    // topRatedReq()
    // upComingReq()
    getMovieList()
    
    
  },[])

  //true : 데이터를 가져오기 전
  //false : 데이터를 가져온 후

console.log('데이터 출력완료!',popularMovies)

  return (
    <div>
      {loading?  (
      <ClipLoader
        color= '#ffffff'
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      ) : (
      <div>
        {/* {popularpost && <Banner movie={popularpost[0]}/>} */}
        <Banner movie={popularMovies[0]}/>
  <div>
  <h1>인기있는 영화</h1>
  <MovieSlide  movies={popularMovies} />
  <h1>Top rated Movie</h1>
  <MovieSlide/>
  <h1>Upcoming Movie</h1>
  <MovieSlide/>
  </div>
        </div>
      )}
   
    </div>
    )
    
  
}

export default Home