// import React from 'react'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import MainContent from './MainContent'
// import { useSelector } from 'react-redux'
// import ShimmerUI from './ShimmerUI'

// const Shorts = () => {

//     const Videos=useSelector(store=>store?.videos.videos);
//     if(Videos.length<0) return <ShimmerUI/>
//   return (
//     <div>
//      <div className='bg-white shadow-2xl py-2 sticky top-0 z-50'> <Header/>,</div>
//      <div className='grid grid-cols-12'>
//         <div className='col-span-2'> <Sidebar/></div>
//     <div className='col-span-10'>  <MainContent/></div>
//      </div>
//     </div>
//   )
// }

// export default Shorts



//respnsive css

import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { useSelector } from 'react-redux'
import ShimmerUI from './ShimmerUI'

const Shorts = () => {

  const Videos = useSelector(store => store?.videos.videos)
  if (!Videos || Videos.length === 0) return <ShimmerUI />

  return (
    <div className="w-full min-h-screen">
      
      {/* Header */}
      <div className="bg-white shadow-2xl py-2 sticky top-0 z-50">
        <Header />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        
        {/* Sidebar (hidden on mobile) */}
        <div className="hidden md:block md:col-span-2">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-10">
          <MainContent />
        </div>

      </div>
    </div>
  )
}

export default Shorts
