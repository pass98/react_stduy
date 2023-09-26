import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Provider컴포넌트 : Redux를 사용할 수 있게 해주는 컴포넌트
// 모든 컴포넌트가 store에 접근할 수 있도록 연결해주는 역할 
import {Provider} from 'react-redux'
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  /* </React.StrictMode> */
);

reportWebVitals();