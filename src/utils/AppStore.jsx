import { configureStore } from "@reduxjs/toolkit";

 import userReducer from './UserSlice'
 import SidebarReducer from './SidebarSlice'
 import VideoReducer from './VideoSlice'
 import MessageReducer from './MessageLiveSlice'
const AppStore=configureStore({

    reducer:{
        user:userReducer,
        sidebar:SidebarReducer,
        videos:VideoReducer,
        MessageLive:MessageReducer
    }
})



export default AppStore