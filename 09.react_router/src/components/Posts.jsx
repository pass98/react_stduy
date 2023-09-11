import React, { useEffect } from 'react'
import axios from 'axios'
const Posts = () => {

    //전체 데이터 요청 함수 
    const getPostsAll = async () => {
        let response = await axios('http://localhost:3004/pots')
        console.log(response.data);

    }
    //하나의 데이터를 요청하는 함수 
    const getPost = async () => {
        let response = await axios('http://localhost:3004/posts/1')
        console.log(response.data);

    }

    useEffect(()=>{
        console.log('데이터 받아오기');
        // getPostsAll()
        getPost()
    }, [])

  return (
    <div>Posts</div>
  )
}

export default Posts