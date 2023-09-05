import React from 'react'



const Weather = ({weather,day}) => {

  // 객체?.속성 : 객체에 정보가 nunll인지 판단 (삼항연산자의 응용)
  console.log('현재 날씨 정보는?? :', weather)
  console.log('지역', weather?.name);
  console.log('온도',weather?.main.temp);
  console.log('아이콘:',weather?.weather[0].icon)
  return (
    
    <div>
        <h1>{day}</h1>
        <div><img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt ='이미지없음'></img></div>
        <p>현재 {weather?.name}은 {weather?.main.temp}℃입니다.</p>
    </div>
  )
}

export default Weather