import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGames = createAsyncThunk("getGames", async (data, { rejectWithValue }) => {
  try {
    const myheaders = new Headers();
    myheaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6OSwiaWF0IjoxNzE0NTY4ODA0LCJleHAiOjE3NDYxMDQ4MDR9.zjSSRPFOoNcbyk0IQ45a8SiQVHdlewwFKqbxV2jBALA");

    const response = await fetch("https://test.maya555.store/api/admin/starline/get/starline/game?page=1&limit=30", { headers: myheaders });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error : ", error);
    return rejectWithValue(error); 
  }
});


export const deleteGame = createAsyncThunk("deleteGame", async (data, { rejectWithValue ,dispatch }) => {
  try {

    let {gameId} = data

    const myheaders = new Headers();
    myheaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6OSwiaWF0IjoxNzE0MjEzMTg5LCJleHAiOjE3NDU3NDkxODl9.sCGlArgBrO7r8Ql-QDhMTD3i3ApzKvt_uXfo2RMUjYE");

    const response = await fetch(`https://test.maya555.store/api/admin/starline/delete/game/status/${gameId}`, { headers: myheaders });

    const result = await response.json();

    // bad practice

    if (result.status == "001") {  
        dispatch(getGames())
    }


    return result;
  } catch (error) {
    console.log("error : ", error);
    return rejectWithValue(error); 
  }
});
