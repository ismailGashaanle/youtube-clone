// import React from 'react'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import MainContent from './MainContent'
// import { useSelector } from 'react-redux'
 

// const Youtube = () => {

//     const ShowSidebar=useSelector(store=>store?.sidebar.showSide)



//   return (
//     <div>

//        <div className='bg-white p-3 shadow-2xl sticky top-0 z-59'> <Header/></div>
//       <div className='grid grid-cols-12'>
//        {ShowSidebar &&   <div className='col-span-2'> <div ><Sidebar/></div> </div>}
//      {!ShowSidebar &&  <div className='p-2 col-span-12   bg-white shadoww-lg text-black h-screen'> <MainContent/></div>}
//       {ShowSidebar &&   <div className='p-2 col-span-10   bg-white shadoww-lg text-black h-screen'> <MainContent/></div>}
       
//       </div>
            
//     </div>
//   )
// }

// export default Youtube






//responsive

import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { useSelector } from 'react-redux'

const Youtube = () => {

  const ShowSidebar = useSelector(store => store?.sidebar.showSide)

  return (
    <div className="w-full min-h-screen">

      {/* Header */}
      <div className="bg-white p-3 shadow-2xl sticky top-0 z-50">
        <Header />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12">

        {/* Sidebar (desktop only) */}
        {ShowSidebar && (
          <div className="hidden md:block md:col-span-2">
            <Sidebar />
          </div>
        )}

        {/* Main Content */}
        <div
          className={`p-2 bg-white text-black min-h-screen
          ${ShowSidebar ? 'md:col-span-10' : 'md:col-span-12'}`}
        >
          <MainContent />
        </div>

      </div>
    </div>
  )
}

export default Youtube
