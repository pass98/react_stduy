// import React from 'react'


// /*
//     1. 사용자로부터 id, pw를 입력받는다 (prompt() 활용)
//     2. 성공여부에 따라 다른 화면을 출력한다. (성공시 LoginSuccess 컴포넌트 출력 -> '환영합니다~!')
//         실패시) LoginFail 컴포넌트 실행 -> '아이디 또는 패스워드가 잘못되었습니다.."
//         + 아이디만 틀린 경우 또는 패스워드가 틀린 경우를 구분하여 메시지 출력해보기
// */
// const idpw = (inputid,inputpw) => {
//     if(inputid === 'id' && inputpw === 'pw'){
//         return <LoginSuccess />;
//     } else if ( inputid !== 'id'){
//         return <Loginfail message='아이디가 잘못되었습니다.'/>;
//     } else if (inputpw !== 'pw'){
//         return <Loginfail message ="비밀번호가 잘못되었습니다."/>;
//     }  else {
//         return <Loginfail message ="전부 다 틀렸습니다."/>
//     }
// }


// // if(inputid === 'id' && inputpw === 'pw'){
// //     text = '환영합니다!~'
// // }else if(inputid != 'id' && inputpw === 'pw'){
// //     text = '아이디가 잘못되었습니다.' 
// // }else if(inputid === 'id' && inputpw != 'pw'){
// //     text = '비밀번호가 잘못되었습니다.'
// // }else{
// //     text = '전부 다 틀렸습니다.'
// // }


// const LoginSuccess = () => {
//     console.log('로그인 성공')
//     return(
//         <div>
//             <p>환영합니다!~</p>
//         </div>
//     )
// }

// const Loginfail = ({message}) => {
//     console.log('로그인 실패')
//     return(
//         <div>
//             <p>{message}</p>
//         </div>
//     )
// }

// const AppSameple = () => {
//     const inputid = prompt('아이디를 입력하세요')
//     const inputpw = prompt('비밀번호를 입력하세요')
//     const message = idpw(inputid,inputpw)
//     return (
//     <div>
//         {message === 'success' ? <LoginSuccess/> : <Loginfail message={message} />}
    
//     </div>
//   );
// }


// export default AppSameple


// import React from 'react';

// const getValidationMessage = (inputid, inputpw) => {
//     if (inputid === 'id' && inputpw === 'pw') {
//         return 'success';
//     } else if (inputid !== 'id') {
//         return "아이디가 잘못되었습니다.";
//     } else if (inputpw !== 'pw') {
//         return "비밀번호가 잘못되었습니다.";
//     } else {
//         return "전부 다 틀렸습니다.";
//     }
// }

// const LoginSuccess = () => {
//     return <div><p>환영합니다!~</p></div>;
// }

// const Loginfail = ({message}) => {
//     return <div><p>{message}</p></div>;
// }

// const AppSameple = () => {
//     const inputid = prompt('아이디를 입력하세요');
//     const inputpw = prompt('비밀번호를 입력하세요');
//     const message = getValidationMessage(inputid, inputpw);

//     return (
//       <div>
//         {message === 'success' ? <LoginSuccess /> : <Loginfail message={message} />}
//       </div>
//     );
// }

// export default AppSameple;






// // 로그인 검증 함수
// const validateCredentials = (inputId, inputPw) => {
//     if (inputId === 'id' && inputPw === 'pw') {
//         return 'success';
//     } 
//     if (inputId !== 'id' && inputPw === 'pw') {
//         return '아이디가 잘못되었습니다.';
//     } 
//     if (inputId === 'id' && inputPw !== 'pw') {
//         return '비밀번호가 잘못되었습니다.';
//     } 
//     return '아이디와 비밀번호 모두 잘못되었습니다.';
// }

// // 로그인 성공 컴포넌트
// const LoginSuccess = () => (
//     <div>
//         <p>환영합니다!~</p>
//     </div>
// );

// // 로그인 실패 컴포넌트
// const LoginFail = ({ message }) => (
//     <div>
//         <p>{message}</p>
//     </div>
// );

// 메인 컴포넌트
// const AppSample = () => {
//     const inputId = prompt('아이디를 입력하세요');
//     const inputPw = prompt('비밀번호를 입력하세요');
//     const validationResult = validateCredentials(inputId, inputPw);

//     if (validationResult === 'success') {
//         return <LoginSuccess />;
//     } else {
//         return <LoginFail message={validationResult} />;
//     }
// }

import React from 'react'

function APP() {
    const id, pw = () => {
    prompot()
}
return (
    </div>
)
}
