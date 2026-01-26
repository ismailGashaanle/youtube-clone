import { createSlice } from "@reduxjs/toolkit";



const MessageLiveSlice=createSlice({
    name:"MessageLive",
    initialState:{
        MessageLive:[],
    },
    reducers:{
        addMessgaeLIve:(state,action)=>{
     if(state.MessageLive.length>6){
        state.MessageLive.splice(6,1)
     }
            state.MessageLive.unshift(action.payload);

        }
    }
})

export const {addMessgaeLIve}=MessageLiveSlice.actions;
export default MessageLiveSlice.reducer