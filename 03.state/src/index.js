import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// 실습1
import App from './EX01'

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
