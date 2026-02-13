// import React from 'react'
// import ButtonList from './ButtonList'
// import { IoMdHome } from 'react-icons/io'
// import { SiYoutubeshorts } from 'react-icons/si'
// import { Link } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className='fixed  col-span-2 py-3 bg-white shadow-2xl  px-8 h-screen  top-24 z-10 '>
//   <div className='flex flex-col gap-4 '>
//      <button className='flex gap-2 items-center px-2 '> <IoMdHome className='text-2xl' /> <Link to="/youtube">Home</Link> </button>
// <Link to="/shorts">   <button className='flex gap-2 cursor-pointer items-center px-2 '> <SiYoutubeshorts className='cursor-pointer text-2xl' />  Shorts</button></Link>
//   </div>
//     </div>
//   )
// }

// export default Sidebar







// import React, { useState } from 'react'
// import ButtonList from './ButtonList'
// import { IoMdHome } from 'react-icons/io'
// import { SiYoutubeshorts } from 'react-icons/si'
// import { Link } from 'react-router-dom'
// import { MdSubscriptions, MdWatchLater } from 'react-icons/md'

// const Sidebar = () => {
// const [watchLaterOpen, setWatchLaterOpen] = useState(false)
//   const [subsribed,setsubsribed]=useState(false)

//   return (
//     <div className='fixed  col-span-2 py-3 bg-white shadow-2xl   h-screen  top-24 z-10 '>
//   <div className='flex flex-col gap-4  px-6 '>
//      <button className='flex gap-2 shadow-lg py-3 px-7 items-center px-2 '> <IoMdHome className='text-2xl' /> <Link to="/youtube">Home</Link> </button>
// <Link className='shadow-lg py-3 px-7' to="/shorts">   <button className='flex gap-2 cursor-pointer items-center px-2 '> <SiYoutubeshorts className='cursor-pointer text-2xl' />  Shorts</button></Link>

//   </div>
//    <div className='border my-2 border-gray-300 w-full'></div>
//    <div>
//     <button  onClick={()=>setsubsribed(!subsribed)} className=' bg-white px-7 mt-4 mx-2 py-2 rounded-lg cursor-pointer hover:bg-gray-500 shadow-2xl border flex gap-2 border-gray-400'>  <MdSubscriptions className="text-2xl" /> Subscription  </button>
//          <div className='px-2 py-1'>
//          {
//           subsribed &&
//             <ul className='flex flex-col gap-2'>
//             <li className='bg-white cursor-pointer shadow-2xl rounded-sm py-2 px-4 text-center text-sm'>Recent Upload</li>
//             <li className='bg-white cursor-pointer shadow-2xl rounded-sm py-2 px-4 text-center text-sm'>Channels</li>
//             <li className='bg-white cursor-pointer shadow-2xl rounded-sm py-2 px-4 text-center text-sm'>Live</li>
//            </ul>
//          }
//          </div>


//            {/* Watch Later */}
//         <button
//           onClick={() => setWatchLaterOpen(!watchLaterOpen)}
//           className="flex gap-2 shadow-lg py-3 px-7 items-center w-full"
//         >
//           <MdWatchLater className="text-2xl" />
//           Watch Later
//         </button>

    
//       {/* Watch Later Sub Menu */}
//         {watchLaterOpen && (
//           <div className="ml-10 flex flex-col gap-2 text-sm text-gray-700">
//             <span className='cursor-pointer'>Saved Videos</span>
//             <span className='cursor-pointer'>Playlists</span>
//           </div>
//         )}
   


//    </div>
//      </div>
//   )
// }

// export default Sidebar


import React, { useState } from 'react'
import { IoMdHome } from 'react-icons/io'
import { SiYoutubeshorts } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { MdSubscriptions, MdWatchLater } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'

const Sidebar = () => {
  const [watchLaterOpen, setWatchLaterOpen] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-24 left-4 z-50">
        <button onClick={() => setIsOpen(true)}>
          <HiMenu className="text-3xl" />
        </button>
      </div>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-24 left-0 h-screen bg-white shadow-2xl z-50
          w-64 transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:block
        `}
      >
        <div className="flex flex-col gap-4 px-6 py-4">

          <Link to="/youtube" className="flex gap-2 items-center py-2 hover:bg-gray-100 rounded">
            <IoMdHome className="text-2xl" />
            Home
          </Link>

          <Link to="/shorts" className="flex gap-2 items-center py-2 hover:bg-gray-100 rounded">
            <SiYoutubeshorts className="text-2xl" />
            Shorts
          </Link>

          <hr />

          {/* Subscription */}
          <button
            onClick={() => setSubscribed(!subscribed)}
            className="flex gap-2 items-center py-2 hover:bg-gray-100 rounded"
          >
            <MdSubscriptions className="text-2xl" />
            Subscription
          </button>

          {subscribed && (
            <ul className="ml-6 flex flex-col gap-2 text-sm">
              <li className="cursor-pointer hover:text-blue-500">Recent Upload</li>
              <li className="cursor-pointer hover:text-blue-500">Channels</li>
              <li className="cursor-pointer hover:text-blue-500">Live</li>
            </ul>
          )}

          {/* Watch Later */}
          <button
            onClick={() => setWatchLaterOpen(!watchLaterOpen)}
            className="flex gap-2 items-center py-2 hover:bg-gray-100 rounded"
          >
            <MdWatchLater className="text-2xl" />
            Watch Later
          </button>

          {watchLaterOpen && (
            <div className="ml-6 flex flex-col gap-2 text-sm">
              <span className="cursor-pointer hover:text-blue-500">Saved Videos</span>
              <span className="cursor-pointer hover:text-blue-500">Playlists</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar

