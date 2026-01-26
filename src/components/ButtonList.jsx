

// import React, { useState } from 'react'
// import Buttons from './Buttons'

// const ButtonList = () => {
//     const[ btnList,sebtnList]=useState([
//         "Home",
//         "Movies",
//         "Trending",
//         "Live",
//         "ICT",
//         "Gaming",
//         "Biking",
//         "dressing",
         
//     ])
//   return (
//     <div className='w-full'>

//      <div className='bg-white p-2 flex  gap-8 items-center justify-center px-2 shadow w-full'>
//          {btnList.map((name,index)=>(
//        <Buttons key={index} name={name}/>
//       ))}
//      </div>
      
//     </div>
//   )
// }

// export default ButtonList



//responsive

import React, { useState } from 'react'
import Buttons from './Buttons'

const ButtonList = () => {
  const [btnList, setbtnList] = useState([
    "Home",
    "Movies",
    "Trending",
    "Live",
    "ICT",
    "Gaming",
    "Biking",
    "dressing",
  ])

  return (
    <div className="w-full">

      <div
        className="
        bg-white p-2 shadow w-full
        flex gap-3 items-center
        overflow-x-auto scrollbar-hide
        md:justify-center
        "
      >
        {btnList.map((name, index) => (
          <Buttons key={index} name={name} />
        ))}
      </div>

    </div>
  )
}

export default ButtonList
