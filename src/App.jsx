import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Body from './components/Body'
import WatchPage from './components/WatchPage'
import { Provider } from 'react-redux'
import AppStore from './utils/AppStore'
import MainContent from './components/MainContent'
import Youtube from './components/Youtube'
import Shorts from './components/Shorts'

const AppLayout=()=>{
  return(
    <>
    <Body/>
    <Outlet/>
    </>
  )
}

const App = () => {
 

  const AppRouter=createBrowserRouter([
    // {
    //   path:"/",
    //   element:<Body/>,
    //   errorElement:<NotFound/>,
    //   children:[
    //     {
    //      index:true,
    //      element:<Login/>
          
    //     },

    //     {
    //       path:"/youtube",
    //       element:<Youtube/>,
    //       children:[
    //         {
    //           path:"watch",
    //           element:<WatchPage/>
    //         }
    //       ]
    //     }

    //   ]
    // }


    {
  path: "/",
  element: <Body/>,
  errorElement:<NotFound/>,
  children: [
    {
      index: true,
      element: <Login/>
    },
    {
      path: "youtube",
      element: <Youtube/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
    {
      path:"/shorts",
      element:<Shorts/>
    }
  ]
}

  ])


  return (
    <div>
    <Provider store={AppStore}>
       <RouterProvider router={AppRouter} />
    </Provider>
    </div>
  )
}

export default App
