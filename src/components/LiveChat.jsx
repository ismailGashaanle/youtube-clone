// import React from 'react'
// import { useSelector } from 'react-redux'

// const LiveChat = () => {
//      const MessageLive=useSelector(store=>store?.MessageLive.MessageLive)
     
  


//   return (

   
//     <div className='flex  gap-2 px-2 flex-col-reverse'>


//         {/* {MessageLive.map((message,index)=>(
// <div key={index}>{message}</div>
//         ))} */}

//         {MessageLive.map((message,index)=>(
//             <div className='bg-white shadow-2xl p-3 rounded-lg' key={index}>{message}</div>
//         ))}
      
//     </div>
//   )
// }

// export default LiveChat




import React from 'react'
import { useSelector } from 'react-redux'

const LiveChat = () => {
  const MessageLive = useSelector(store => store?.MessageLive.MessageLive)

  return (
    <div className="w-full max-w-3xl mx-auto h-[60vh] sm:h-[70vh] md:h-[80vh] 
                    flex flex-col-reverse gap-2 px-3 sm:px-4 
                    overflow-y-auto bg-gray-100 rounded-lg">

      {MessageLive?.map((message, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-2 sm:p-3 
                     rounded-lg w-fit max-w-[85%] sm:max-w-[70%] 
                     break-words text-sm sm:text-base"
        >
          {message}
        </div>
      ))}
    </div>
  )
}

export default LiveChat
