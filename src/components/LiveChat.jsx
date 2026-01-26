import React from 'react'
import { useSelector } from 'react-redux'

const LiveChat = () => {
     const MessageLive=useSelector(store=>store?.MessageLive.MessageLive)
     
    console.log("MessageLive",MessageLive)


  return (

   
    <div className='flex  gap-2 px-2 flex-col-reverse'>


        {/* {MessageLive.map((message,index)=>(
<div key={index}>{message}</div>
        ))} */}

        {MessageLive.map((message,index)=>(
            <div className='bg-white shadow-2xl p-3 rounded-lg' key={index}>{message}</div>
        ))}
      
    </div>
  )
}

export default LiveChat
