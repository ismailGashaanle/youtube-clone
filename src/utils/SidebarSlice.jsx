import { createSlice } from "@reduxjs/toolkit"

 


 const SidebarSlice=createSlice({

    name:"sidebar",
    initialState:{
        showSide:false
    },
    reducers:{
        ShowSidebar:(state)=>{
            state.showSide=!state.showSide
        }
    }


 })


 export default SidebarSlice.reducer;
export  const {ShowSidebar}=SidebarSlice.actions