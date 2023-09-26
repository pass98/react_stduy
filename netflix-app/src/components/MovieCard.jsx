import React from 'react'

const MovieCard = ({movieCard}) => {
  console.log('카드 출력완료', movieCard)
  
  return (
    <div>
      <p>
      {movieCard.overview}
      <img src='${movieCard.poster_path}'></img>
      </p>
    </div>
  )
}

export default MovieCard