import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// create action

export const getUsers = createAsyncThunk("getUsers" , async (data , {rejectWithValue})=>{

const response  = await fetch()

try {
    const result = await response.json()
    return result
} catch (error) {
    rejectWithValue(error)
}

})





const initialState = {
    users:[] ,
    loading : false ,
    error : null
}

// slice of users data
export const userDetails = createSlice({
    name : "userData" ,
    initialState ,
    extraReducers : {
        [getUsers.pending] : (state , action) =>{
            state.loading = true
        },
        [getUsers.fulfilled] : (state , action) =>{
            state.users = action.payload.users
            state.loading = false
        },
        [getUsers.rejected] : (state , action) =>{
            state.error = action.payload.message || action.payload.Backend_Error
            state.loading = false
        }

    }
})