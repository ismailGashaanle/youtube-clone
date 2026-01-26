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







import React from 'react'
import ButtonList from './ButtonList'
import { IoMdHome } from 'react-icons/io'
import { SiYoutubeshorts } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='fixed  col-span-2 py-3 bg-white shadow-2xl   h-screen  top-24 z-10 '>
  <div className='flex flex-col gap-4  px-6 '>
     <button className='flex gap-2 shadow-lg py-3 px-7 items-center px-2 '> <IoMdHome className='text-2xl' /> <Link to="/youtube">Home</Link> </button>
<Link className='shadow-lg py-3 px-7' to="/shorts">   <button className='flex gap-2 cursor-pointer items-center px-2 '> <SiYoutubeshorts className='cursor-pointer text-2xl' />  Shorts</button></Link>

  </div>
   <div className='border my-2 border-gray-300 w-full'></div>
   <div>
    <button className='bg-white px-7 py-2 rounded-lg cursor-pointer hover:bg-gray-500 shadow-2xl border border-gray-400'>Subscription > </button>
   </div>
     </div>
  )
}

export default Sidebar
