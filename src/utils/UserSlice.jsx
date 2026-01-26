import { createSlice } from "@reduxjs/toolkit";


const UserSlice=createSlice({

    name:"user",
    initialState:{
        userData:null
    },
    reducers:{
        AddUser:(state,action)=>{
            state.userData=action.payload

        },
        RemoveUser:(state)=>{
            state.userData=null
        }
    }
})


export default UserSlice.reducer;
export const {AddUser,RemoveUser}=UserSlice.actions