import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name :'movie',
    initialState:'',
    reducers:{}
})

export const MovieReducerActions = movieSlice.actions

export default movieSlice.reducer