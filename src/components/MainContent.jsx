import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
 
import { Link } from 'react-router-dom';
import ButtonList from './ButtonList';
import { useDispatch, useSelector } from 'react-redux';
 
import useMainContent from '../hooks/useMainContent';

const MainContent = () => {
  
  const  videoData=useSelector(store=>store?.videos.videos)
  
    const dispatch=useDispatch();

 
  useMainContent();
  return (
    <div className="flex w-full flex-col gap-4">

<ButtonList/>

 
      <div className="flex flex-wrap gap-4 justify-center">
        {videoData.map((video) => (
         <Link key={video.id} to={`/watch?v=${video.id}`}> <VideoCard video={video} />  </Link>
//<Link to={`/youtube/watch?v=${video.id}`}>

          // <Link to={`/watch?v=${video.id}`} key={video.id}>
          //   <VideoCard video={video} />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default MainContent;


// import React from 'react';
// import VideoCard from './VideoCard';
// import { Link } from 'react-router-dom';
// import ButtonList from './ButtonList';
// import { useSelector } from 'react-redux';
// import useMainContent from '../hooks/useMainContent';

// const MainContent = () => {
//   const videoData = useSelector(store => store?.videos?.videos) || [];

//   useMainContent();

//   return (
//     <div className="w-full px-4 py-4">
//       <ButtonList />

//       <div className="
//         grid 
//         gap-6 
//         mt-4
//         grid-cols-1 
//         sm:grid-cols-2 
//         md:grid-cols-3 
//         lg:grid-cols-4 
//         xl:grid-cols-4
//       ">
//         {videoData.map((video) => (
//           <Link key={video.id} to={`/watch?v=${video.id}`}>
//             <VideoCard video={video} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainContent;
