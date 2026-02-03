// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const WatchPage = () => {
//   return (
//     <div className='bg-red-600'>
//       <div>
//         <iframe width="560" height="315" 
//         src="https://www.youtube.com/embed/MPDDlBBqZn4?si=lu1l6_knCdYcGixq" 
//         title="YouTube video player" Frameborder="0" allow="accelerometer;
//          autoplay; clipboard-write; encrypted-media;
//           gyroscope; picture-in-picture;
//           web-share" referrerpolicy="strict-origin-when-cross-origin" 
//           allowFullscreen>
//         </iframe>
//       </div>
     
//     </div>
//   )
// }

// export default WatchPage





// import React, { useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import { useDispatch, useSelector } from 'react-redux'
// import LiveChat from './LiveChat'
// import { addMessgaeLIve } from '../utils/MessageLiveSlice'
// // import Sidebar from './Sidebar'
// // import Header from './Header'

// const WatchPage = () => {
//   const [searchParams] = useSearchParams()
//   //const query = searchParams.get("v")
// const query = searchParams.get("v")

//  const [message,setMessage]=useState(null)
//   const showSibars=useSelector(store=>store.sidebar.showSide);
//   const dispatch=useDispatch();


 

//   return (
//     <div className="flex flex-col w-screen h-screen">
   
//       <div className="sticky top-0 shadow-2xl py-2 sticky top-0 z-50 bg-white z-50">
//         <Header />
//       </div>

//       <div className="grid grid-cols-12  items-center">
  
//       {  showSibars && <div className="col-span-2">
//         <Sidebar/>
//         </div>}

//         <div className={`${showSibars ? "col-span-7 -mr-4" : "col-span-9 -ml-2"}  flex justify-center w-full mx-3 h-screen mx-1 z-10`}>
//           <iframe
//             className="w-11/12 h-[450px] my-4 rounded-lg"
//             src={`https://www.youtube.com/embed/${query}`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>

//         <div className='bg-white  border shadow-lg mr-2    -mt-10 rounded-lg col-span-3 w-[330px] overflow-hidden  h-[500px]'>
//          <div className='grid grid-rows-12 w-[300px]  h-[498px]'>
//           <div className='row-span-10 '> <LiveChat/></div>
//       <div className='row-span-2'>
//            <form  onSubmit={(e)=>e.preventDefault()} className='flex gap-3 items-center justify-between w-[300px]'> 
//             <input value={message} onChange={(e)=>setMessage(e.target.value)} 
//            className='px-3    py-4 border focus:outline-none focus:ring-2 rounded-lg
//             capitalize focus:ring-blue-500 w-full'  placeholder='message'/> 
//            <button className='bg-gray-500 text-white 
//              rounded-lg py-3 px-3 cursor-pointer'onClick={dispatch(addMessgaeLIve(message))}>send</button></form>  
//          </div>
//       </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default WatchPage





//responsive


import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import LiveChat from './LiveChat'
import { addMessgaeLIve } from '../utils/MessageLiveSlice'
import ShimmerUI from './ShimmerUI'

const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("v")

  const [message, setMessage] = useState([])
  const showSibars = useSelector(store => store.sidebar.showSide)
  const dispatch = useDispatch()
 

  return (
    <div className="flex flex-col w-full min-h-screen">

      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-2xl py-2">
        <Header />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 px-2">

        {/* Sidebar (desktop only) */}
        {showSibars && (
          <div className="hidden md:block md:col-span-2">
            <Sidebar />
          </div>
        )}

        {/* Video */}
        <div
          className={`flex justify-center w-full
            ${showSibars ? 'md:col-span-7' : 'md:col-span-9'}`}
        >
          <iframe
            className="w-full md:w-11/12 h-[220px] sm:h-[300px] md:h-[450px] my-4 rounded-lg"
            src={`https://www.youtube.com/embed/${query}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Live Chat */}
        <div className="w-full md:col-span-3 bg-white border shadow-lg rounded-lg h-[400px] md:h-[500px]">

          <div className="grid grid-rows-12 h-full">

            <div className="row-span-10 overflow-y-auto">
              <LiveChat  />
            </div>

            <div className="row-span-2 p-2">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2 items-center"
              >
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full capitalize"
                  placeholder="message"
                />
                <button
                  className="bg-gray-500 text-white rounded-lg px-4 py-2"
                  onClick={() => message.length<=0?"": dispatch(addMessgaeLIve(message),setMessage("")) }
                >
                  Send
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default WatchPage
