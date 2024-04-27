import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGames = createAsyncThunk("getGames", async (data, { rejectWithValue }) => {
  try {
    const myheaders = new Headers();
    myheaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6OSwiaWF0IjoxNzE0MTc1MjkyLCJleHAiOjE3NDU3MTEyOTJ9.oAK0BN6Ion1t003wkkq1b-x593kOtzM4sVORP3mGvpI");

    const response = await fetch("https://test.maya555.store/api/admin/starline/get/starline/game?page=1&limit=30", { headers: myheaders });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error : ", error);
    return rejectWithValue(error); 
  }
});


export const deleteGame = createAsyncThunk("deleteGame", async (data, { rejectWithValue }) => {
  try {

    let {gameId} = data

    const myheaders = new Headers();
    myheaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6OSwiaWF0IjoxNzE0MTc1MjkyLCJleHAiOjE3NDU3MTEyOTJ9.oAK0BN6Ion1t003wkkq1b-x593kOtzM4sVORP3mGvpI");

    const response = await fetch(`https://test.maya555.store/api/admin/starline/delete/game/status/${gameId}`, { headers: myheaders });

    const result = await response.json();

    // bad practice

    // if (result.status == "001") {  
    //     dispatch(getGames())
    // }


    return result;
  } catch (error) {
    console.log("error : ", error);
    return rejectWithValue(error); 
  }
});
