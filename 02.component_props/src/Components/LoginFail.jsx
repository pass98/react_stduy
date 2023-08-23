
import React from 'react'

const LoginFail = ({id,pw}) => {

    let result = ''

    if(id!== 'smhrd'){
        result = '아이디가 일치하지 않아요!'
    }else{
        if(pw!=='1234'){
            result = '패스워드가 일치하지 않아요.🤪'
        }
    }

  return (
    <div>{result}</div>
  )
}

export default LoginFail