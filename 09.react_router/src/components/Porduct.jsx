import React from 'react'
import { useNavigate } from 'react-router-dom'

const Porduct = () => {
  const navigate = useNavigate()

  const goToProductDetail = () =>{
    navigate('/productDetail2?cate=shirt')
  }
  return (
    <div>
        <h1>Porduct</h1>
        <button onClick={goToProductDetail}>상품상세페이지로 이동하기!</button>
    </div>
  )
}

export default Porduct