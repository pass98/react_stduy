function AppSample() {
  //이름 변수
  let name = '나범수'

  let today = new Date()

  // 현재 시간 가져오기
  let date = today.toLocaleDateString()
  let now_year = today.getFullYear()
  let now_month = today.getMonth() +1
  let now_day = today.getDay()

  // 날짜 판별하는 로직
  let season = ''
  if (now_month >= 3 && now_month <= 5) {
    season = '봄'
  } else if ((now_month >= 6) & (!now_month <= 8)) {
    season = '여름'
  } else if ((now_month >= 9) & (!now_month <= 11)) {
    season = '가을'
  } else {
    season = '겨을'
  }

  return (
    <div>
      <h1>
        {date}
      </h1>
      <hr />
      <div>
        {name}님 지금은 {season}입니다. 좋은 하루 보내세요!
      </div>
    </div>
  )
}

export default AppSample
