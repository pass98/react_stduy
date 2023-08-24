import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// 실습1 좋아요+1/하트 색칠
// import App from './EX01';

// 실습2 숫자 맞추기 놀이
// import App from './Ex02';

// 실습3 주사위게임
import App from './Ex03';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> # 다시한번 더 실행하면서 안에 있는 내용이 오류가 있는지 확인하는 명령어
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
