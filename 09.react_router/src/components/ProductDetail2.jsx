import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductDetail2 = () => {

    const [query, setQuery] = useSearchParams()


    //쿼리스트링으로 넘겨받은 데이터를 가져오는 함수 : query.get(name)
    console.log('Product페이지로부터 전달받은 값 :', query)

  return (
    <div>ProductDetail2</div>
  )
}

export default ProductDetail2