import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import logger from 'redux-logger'

/*
    store : state, reducer, 내장함수 등을 관리하는 역할 
            하나의 어플리케이션에 하나의 Store만 생성

    configureStore() : store를 생성하는 함수 

    react middleware: action과 reducer 사이에 특정 함수를 실행하는 중간 처리기 역할  
*/

export default configureStore({
    reducer : {
        counter:counterReducer,
        // 임포트를 하면서 export default counterSlice.reducer 의 값을 가져옴.
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // console.log를 찍어내기 위함. 없어도 상관 없음. 
})