import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name :'movie',
    initialState:{
        popularMovies: [],
        topRatedMovies : [],
        upcomingMovies : [],
    },
    reducers:{
        initData : (state,action) => {
                console.log('[movislice]',action);
                let {payload} = action; //구조 분해를 통해 payload 속성값만 접근
                console.log('[movieSlice.js]',payload);

                state.popularMovies = payload.popular.results
                state.topRatedMovies = payload.topRated.results
                state.upcomingMovies = payload.upcoming.results
        },

        //payload를 사용하면 모든 데이터가 payload의 배열로 들어가게됨?
    }
})




export const MovieReducerActions = movieSlice.actions

export default movieSlice.reducer