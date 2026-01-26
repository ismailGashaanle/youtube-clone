import { createSlice } from "@reduxjs/toolkit";

const VideoSlice=createSlice({

    name:"videos",
    initialState:{
        videos:[]
    },
    reducers:{
        addVideos:(state,action)=>{
          state.videos=action.payload
        }
    }

})

export default VideoSlice.reducer;
export const {addVideos}=VideoSlice.actions