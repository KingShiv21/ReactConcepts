import { createSlice } from '@reduxjs/toolkit';
import { deleteGame, getGames } from '../../Actions/Home/gamesDataActtions';


const gamesDataSlice = createSlice({
  name: 'gamesData',
  initialState: {
    data : [] ,
    loading : false,
    error : null,
    success : "" ,
    warning : ""
  },

  // non promise reducers 
  reducers: {

  },

  // promise reducers
  extraReducers(builder) {
    builder

// get games

      .addCase(getGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        
        state.loading = false;
        if (action.payload.status == "001") {
          state.data = action.payload.data;
          
        }else{
          state.warning = action.payload.message || action.payload.Backend_Error ||"Something went wrong!"
        }
      })
      .addCase(getGames.rejected, (state, action) => {
        state.loading = false;
        state.error =  "Error Occured" 
      })

// delete game
      .addCase(deleteGame.fulfilled, (state, action) => {
        if (action.payload.status == "001") {
          state.success = action.payload.message || action.payload.msg || "Game Successfully Removed"
        }else{
          state.warning = action.payload.message || action.payload.Backend_Error ||"Something went wrong!"
        }
      })

      .addCase(deleteGame.rejected, (state, action) => {
        state.error =  "Error Occured" 
      })
  }


});

export default gamesDataSlice.reducer;