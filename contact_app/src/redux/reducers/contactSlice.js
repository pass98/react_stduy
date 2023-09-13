
import {createSlice} from '@reduxjs/toolkit'


export const contactSlice = createSlice({
    name: 'contact',
    initialState:{
        contacts:[],
        keyword : ''
    },
    reducers : {
        addContact : (state,action)=>{
                console.log('나오는 값은?:', action)
                state.contacts = state.contacts.concat(action.payload)
        },
        searchContact : (state,action) => {

        }
    }

}) 

export const contactReducerActions = contactSlice.actions
export default contactSlice.reducer 